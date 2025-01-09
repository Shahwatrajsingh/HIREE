const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { createClient } = require('@supabase/supabase-js');

const app = express();
const port = process.env.PORT || 5000;

// CORS Configuration
const corsOptions = {
    origin: 'http://localhost:5173', // Replace with your front-end local development address
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Initialize Supabase Client
const supabaseUrl = process.env.SUPABASE_URL; // Add your Supabase URL in environment variables
const supabaseKey = process.env.SUPABASE_KEY; // Add your Supabase service role key in environment variables
const supabase = createClient(supabaseUrl, supabaseKey);

// Fetch Companies
app.get('/api/companies', async (req, res) => {
    const { data, error } = await supabase.from('companies').select('*');
    if (error) {
        return res.status(500).json({ error: error.message });
    }
    res.json(data);
});

// Add New Company
app.post('/api/companies', async (req, res) => {
    const { name, logo } = req.body;

    const random = Math.floor(Math.random() * 90000);
    const fileName = `logo-${random}-${name}`;

    const { error: storageError } = await supabase.storage
        .from('company-logo')
        .upload(fileName, logo);

    if (storageError) {
        return res.status(500).json({ error: 'Error uploading Company Logo' });
    }

    const logo_url = `${supabaseUrl}/storage/v1/object/public/company-logo/${fileName}`;

    const { data, error } = await supabase
        .from('companies')
        .insert([
            { name, logo_url }
        ])
        .select();

    if (error) {
        return res.status(500).json({ error: error.message });
    }

    res.json(data);
});

// Add New Job
app.post('/api/jobs', async (req, res) => {
    const { title, description, location, company_id, requirements, recruiter_id, isOpen } = req.body;

    const { data, error } = await supabase
        .from('jobs')
        .insert([
            { title, description, location, company_id, requirements, recruiter_id, isOpen }
        ])
        .select();

    if (error) {
        return res.status(500).json({ error: error.message });
    }

    res.json(data);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
