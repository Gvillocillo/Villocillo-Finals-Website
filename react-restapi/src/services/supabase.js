import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  console.warn('Supabase credentials not configured. Guestbook will not work.');
}

export const supabase = createClient(SUPABASE_URL || '', SUPABASE_ANON_KEY || '');

// Guestbook Service
export const guestbookService = {
  // Get all guestbook entries
  getEntries: async () => {
    try {
      const { data, error } = await supabase
        .from('messages')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return { data, error: null };
    } catch (error) {
      console.error('Error fetching guestbook entries:', error);
      return { data: null, error };
    }
  },

  // Add new guestbook entry
  addEntry: async (name, message, email) => {
    try {
      const { data, error } = await supabase
        .from('messages')
        .insert([
          {
            name: name || 'Anonymous',
            message,
            email,
            created_at: new Date().toISOString(),
          },
        ])
        .select();

      if (error) throw error;
      return { data, error: null };
    } catch (error) {
      console.error('Error adding guestbook entry:', error);
      return { data: null, error };
    }
  },

  // Delete entry (if authenticated)
  deleteEntry: async (id) => {
    try {
      const { data, error } = await supabase
        .from('messages')
        .delete()
        .eq('id', id);

      if (error) throw error;
      return { data, error: null };
    } catch (error) {
      console.error('Error deleting guestbook entry:', error);
      return { data: null, error };
    }
  },

  // Like/unlike entry
  toggleLike: async (id, currentLikes) => {
    try {
      const { data, error } = await supabase
        .from('messages')
        .update({ likes: currentLikes + 1 })
        .eq('id', id)
        .select();

      if (error) throw error;
      return { data, error: null };
    } catch (error) {
      console.error('Error updating entry:', error);
      return { data: null, error };
    }
  },
};

// Auth Service
export const authService = {
  // Sign up
  signUp: async (email, password) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });
      if (error) throw error;
      return { data, error: null };
    } catch (error) {
      console.error('Error signing up:', error);
      return { data: null, error };
    }
  },

  // Sign in
  signIn: async (email, password) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      return { data, error: null };
    } catch (error) {
      console.error('Error signing in:', error);
      return { data: null, error };
    }
  },

  // Sign out
  signOut: async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      return { error: null };
    } catch (error) {
      console.error('Error signing out:', error);
      return { error };
    }
  },

  // Get current user
  getCurrentUser: async () => {
    try {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();
      if (error) throw error;
      return { user, error: null };
    } catch (error) {
      console.error('Error getting user:', error);
      return { user: null, error };
    }
  },

  // Listen for auth changes
  onAuthStateChange: (callback) => {
    return supabase.auth.onAuthStateChange(callback);
  },
};

export default supabase;
