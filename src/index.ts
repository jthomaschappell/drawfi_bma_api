import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// API Token Authentication Middleware
const apiTokenAuth = (req: express.Request, res: express.Response, next: express.NextFunction): void => {
  const apiToken = req.headers['x-api-token'];
  const expectedToken = process.env.X_API_TOKEN;

  if (!expectedToken) {
    console.error('X_API_TOKEN not set in environment variables');
    res.status(500).json({
      status: 'error',
      error: 'Server configuration error'
    });
    return;
  }

  if (!apiToken || apiToken !== expectedToken) {
    res.status(401).json({
      status: 'error',
      error: 'Invalid or missing API token'
    });
    return;
  }

  next();
};

// Apply API token authentication to all routes
app.use(apiTokenAuth);

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase credentials');
}

const supabase = createClient(supabaseUrl, supabaseKey);

// ! Works. 
// Health endpoints
app.get('/health', async (req, res) => {
  try {
    // Test Supabase connection
    // const { data, error } = await supabase.from('_health_check').select('*').limit(1);
    const { data, error } = await supabase.from('profiles').select('*');

    console.log(data);
    if (error) {
      throw error;
    }

    res.json({
      status: 'healthy',
      database: 'connected',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Health check failed:', error);
    res.status(500).json({
      status: 'unhealthy',
      error: 'Database connection failed'
    });
  }
});

// ! Works. 
// Server health endpoint
app.get('/server-health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString()
  });
});

// ! Works. 
// Allowed Emails endpoint
app.get('/allowed-emails', async (req, res) => {
  try {
    const { data, error } = await supabase.from('allowed_emails').select('*');
    
    if (error) {
      throw error;
    }

    res.json({
      status: 'success',
      data,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Failed to fetch allowed emails:', error);
    res.status(500).json({
      status: 'error',
      error: 'Failed to fetch allowed emails'
    });
  }
});

// Projects endpoint
app.get('/projects', async (req, res) => {
  try {
    const { data, error } = await supabase.from('projects').select('*');
    
    if (error) {
      throw error;
    }

    res.json({
      status: 'success',
      data,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Failed to fetch projects:', error);
    res.status(500).json({
      status: 'error',
      error: 'Failed to fetch projects'
    });
  }
});

// Project Completion endpoint
app.get('/project-completion', async (req, res) => {
  try {
    const { data, error } = await supabase.from('project_completion').select('*');
    
    if (error) {
      throw error;
    }

    res.json({
      status: 'success',
      data,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Failed to fetch project completion:', error);
    res.status(500).json({
      status: 'error',
      error: 'Failed to fetch project completion'
    });
  }
});

// Inspection Reports endpoint
app.get('/inspection-reports', async (req, res) => {
  try {
    const { data, error } = await supabase.from('inspection_reports').select('*');
    
    if (error) {
      throw error;
    }

    res.json({
      status: 'success',
      data,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Failed to fetch inspection reports:', error);
    res.status(500).json({
      status: 'error',
      error: 'Failed to fetch inspection reports'
    });
  }
});

// Financial Institutions endpoint
app.get('/financial-institutions', async (req, res) => {
  try {
    const { data, error } = await supabase.from('financial_institutions').select('*');
    
    if (error) {
      throw error;
    }

    res.json({
      status: 'success',
      data,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Failed to fetch financial institutions:', error);
    res.status(500).json({
      status: 'error',
      error: 'Failed to fetch financial institutions'
    });
  }
});

// Line Item Inspections endpoint
app.get('/line-item-inspections', async (req, res) => {
  try {
    const { data, error } = await supabase.from('line_item_inspections').select('*');
    
    if (error) {
      throw error;
    }

    res.json({
      status: 'success',
      data,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Failed to fetch line item inspections:', error);
    res.status(500).json({
      status: 'error',
      error: 'Failed to fetch line item inspections'
    });
  }
});

// Project Messages endpoint
app.get('/project-messages', async (req, res) => {
  try {
    const { data, error } = await supabase.from('project_messages').select('*');
    
    if (error) {
      throw error;
    }

    res.json({
      status: 'success',
      data,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Failed to fetch project messages:', error);
    res.status(500).json({
      status: 'error',
      error: 'Failed to fetch project messages'
    });
  }
});

// Bank of Utah Projects endpoint
app.get('/projects/bank-of-utah', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('bank', 'bank_of_utah');
    
    if (error) {
      throw error;
    }

    res.json({
      status: 'success',
      data,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Failed to fetch Bank of Utah projects:', error);
    res.status(500).json({
      status: 'error',
      error: 'Failed to fetch Bank of Utah projects'
    });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 