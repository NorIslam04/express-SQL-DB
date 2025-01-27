const { createClient } = require('@supabase/supabase-js');

// Configuration de Supabase
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
    throw new Error('Les variables d\'environnement SUPABASE_URL et SUPABASE_KEY sont requises');
}

let supabase;

try {
    supabase = createClient(supabaseUrl, supabaseKey);
} catch (error) {
    console.error('Erreur lors de la configuration de Supabase:', error.message);
    throw error;
}

module.exports = supabase;