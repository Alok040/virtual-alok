import axios, { AxiosInstance } from 'axios'

class APIClient {
  private client: AxiosInstance
  private baseURL: string

  constructor() {
    this.baseURL = import.meta.env.VITE_API_URL || 'http://localhost:3000'
    
    console.log('API Client initialized with baseURL:', this.baseURL)

    this.client = axios.create({
      baseURL: this.baseURL,
      timeout: 30000,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    this.setupInterceptors()
  }

  private setupInterceptors() {
    this.client.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401) {
          window.location.href = '/login'
        }
        return Promise.reject(error)
      }
    )
  }

  async sendMessage(message: string, history: any[] = []): Promise<{ reply: string }> {
    try {
      console.log('Sending message to:', `${this.baseURL}/api/chat`)
      console.log('Payload:', { message, historyLength: history.length })
      
      const response = await this.client.post('/api/chat', {
        message: this.sanitizeInput(message),
        history: history
      })
      
      console.log('API Response:', response.data)
      return response.data
    } catch (error: any) {
      console.error('API Error:', error)
      console.error('Error details:', {
        message: error.message,
        status: error.response?.status,
        data: error.response?.data
      })
      throw new Error('Failed to send message: ' + (error.response?.data?.error || error.message))
    }
  }

  async getAboutInfo(): Promise<{ content: string }> {
    try {
      const response = await this.client.get('/about')
      return response.data
    } catch (error) {
      console.error('API Error:', error)
      throw new Error('Failed to fetch about info')
    }
  }

  private sanitizeInput(input: string): string {
    return input
      .replace(/[<>]/g, '')
      .trim()
      .slice(0, 1000)
  }
}

export default new APIClient()