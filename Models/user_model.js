// models/userModel.js

const supabase = require('../Config/supabase.js'); // Importez votre client Supabase configuré

const UserModel = {


    async getAll() {
        const { data, error } = await supabase
          .from('users')
          .select('*');

        if (error) {
          throw new Error(`Erreur lors de la récupération des utilisateurs: ${error.message}`);
        }

        return data;
      },

  async create(userData) {
    const { data, error } = await supabase
      .from('users') // Nom de la table dans Supabase
      .insert([userData])
      .select();

    if (error) {
      throw new Error(`Erreur lors de la création de l'utilisateur: ${error.message}`);
    }

    return data[0];// Renvoie le premier utilisateur créé
  },

  async findByEmail(email) {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('email', email)// Recherche par email
      .single();// Récupère un seul utilisateur

    if (error) {
      throw new Error(`Erreur lors de la recherche de l'utilisateur: ${error.message}`);
    }

    return {user: data}
  },

  async findById(id) {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      throw new Error(`Erreur lors de la recherche de l'utilisateur: ${error.message}`);
    }

    return data;
  },

  async update(id, updateData) {
    const { data, error } = await supabase
      .from('users')
      .update(updateData)
      .eq('id', id)
      .select();

    if (error) {
      throw new Error(`Erreur lors de la mise à jour de l'utilisateur: ${error.message}`);
    }

    return data[0];// Renvoie l'utilisateur mis à jour
  },

  async delete(id) {
    const { data, error } = await supabase
      .from('users')
      .delete()
      .eq('id', id)
      .select();

    if (error) {
      throw new Error(`Erreur lors de la suppression de l'utilisateur: ${error.message}`);
    }

    return data[0];// Renvoie l'utilisateur supprimé
  },
};

module.exports = UserModel;