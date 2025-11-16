import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const API_KEY = process.env.LLAMA_API_KEY;

console.log('=== Backend Started ===');
console.log('API Key loaded:', API_KEY ? 'Yes ✓' : 'No ✗');
console.log('API Key preview:', API_KEY ? API_KEY.substring(0, 15) + '...' : 'Not set');

app.post("/api/chat", async (req, res) => {
  const { message, history } = req.body;

  console.log('\n=== Chat Request ===');
  console.log('Message:', message);
  console.log('History:', history ? history.length + ' items' : 'empty');

  if (!API_KEY) {
    return res.status(500).json({ error: 'API_KEY not configured' });
  }

  const messages = [
    {
      role: "system",
      content: "You are Virtual Alok Saini. Reply exactly like Alok Saini."
    },
    ...(history || []),
    {
      role: "user",
      content: message
    }
  ];

  try {
    console.log('Sending to OpenRouter...');
    
    const body = JSON.stringify({
      model: "meta-llama/llama-3.3-70b-instruct:free",
      messages: messages,
      max_tokens: 1024
    });

    console.log('Request body size:', body.length, 'bytes');

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "http://localhost:3000",
        "X-Title": "Virtual Alok"
      },
      body: body
    });

    console.log('Response status:', response.status);

    const data = await response.json();

    console.log('Response received');

    if (!response.ok) {
      console.error('OpenRouter error:', data);
      return res.status(response.status).json({ error: data.error?.message || 'OpenRouter error', details: data });
    }

    if (!data.choices || data.choices.length === 0) {
      console.error('No choices:', data);
      return res.status(500).json({ error: 'No response from model' });
    }

    const reply = data.choices[0].message.content;
    console.log('✓ Success! Reply length:', reply.length);
    res.json({ reply });

  } catch (error) {
    console.error('Error:', error.message);
    console.error('Stack:', error.stack);
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`\n✓ Backend running on port ${PORT}`);
  console.log('Ready to receive messages...\n');
});