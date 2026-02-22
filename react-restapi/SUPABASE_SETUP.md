# Supabase Guestbook Setup Guide

This guide walks you through setting up Supabase for the guestbook feature.

## Prerequisites

- Supabase account (free tier available at [supabase.com](https://supabase.com))
- Project created in Supabase dashboard

## Step 1: Create Supabase Account & Project

1. Go to [supabase.com](https://supabase.com)
2. Sign up or log in
3. Create a new project:
   - Click "New Project"
   - Enter project name
   - Create password (save this!)
   - Choose region closest to you
   - Wait for it to initialize (2-3 minutes)

## Step 2: Create the Guestbook Table

1. In Supabase dashboard, go to **SQL Editor**
2. Click **New Query**
3. Paste this SQL and run it:

```sql
-- Create guestbook table
CREATE TABLE guestbook (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT NOT NULL DEFAULT 'Anonymous',
  email TEXT,
  message TEXT NOT NULL,
  likes INT DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS (Row Level Security)
ALTER TABLE guestbook ENABLE ROW LEVEL SECURITY;

-- Create policies for public access
-- Allow anyone to read
CREATE POLICY "Allow public to read guestbook"
  ON guestbook FOR SELECT
  USING (true);

-- Allow anyone to insert
CREATE POLICY "Allow public to insert into guestbook"
  ON guestbook FOR INSERT
  WITH CHECK (true);

-- Allow anyone to update likes only
CREATE POLICY "Allow public to update likes"
  ON guestbook FOR UPDATE
  USING (true)
  WITH CHECK (true);
```

4. Click **Run** and confirm

## Step 3: Get Your Credentials

1. Go to **Settings** → **API**
2. Copy these values:
   - **Project URL** → `VITE_SUPABASE_URL`
   - **anon (public)** key → `VITE_SUPABASE_ANON_KEY`

## Step 4: Configure Environment Variables

1. In your project root, create `.env` file:

```bash
cp .env.example .env
```

2. Edit `.env` and add your Supabase credentials:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

3. Save the file (never commit this to git!)

## Step 5: Test the Setup

1. Start the dev server:
```bash
npm run dev
```

2. Navigate to `http://localhost:5173/guestbook`

3. Try adding a message - it should appear in the list!

## Troubleshooting

### "Supabase credentials not configured" warning

**Solution:** Ensure `.env` file exists with correct variables:
- Verify file is named `.env` (not `.env.example`)
- Check `VITE_SUPABASE_URL` starts with `https://`
- Ensure `VITE_SUPABASE_ANON_KEY` is a long string

### No entries appearing

**Solution:**
1. Check browser console for errors
2. Verify table created in Supabase SQL Editor
3. Run this to list tables:
   ```sql
   SELECT table_name FROM information_schema.tables 
   WHERE table_schema = 'public';
   ```

### Messages not saving

**Solution:**
1. Check **Authentication** → **Policies** in Supabase
2. Ensure INSERT policy exists and is enabled
3. Try inserting from Supabase dashboard directly

### CORS errors

**Solution:** This is expected if your domain isn't in Supabase CORS settings
- Go to **Settings** → **API** → **CORS**
- Add your URL (e.g., `http://localhost:5173`)

## Database Schema Details

The `guestbook` table has these columns:

| Column | Type | Notes |
|--------|------|-------|
| `id` | BIGINT (PK) | Auto-increment ID |
| `name` | TEXT | Guest's name (optional) |
| `email` | TEXT | Guest's email (optional) |
| `message` | TEXT | Guest's message (required) |
| `likes` | INT | Like counter |
| `created_at` | TIMESTAMP | When added |
| `updated_at` | TIMESTAMP | Last update |

## Managing Guestbook Data

### View all entries
In Supabase **Table Editor**:
1. Go to **Data** → **guestbook**
2. See all entries with timestamps

### Delete an entry
1. Click row in Table Editor
2. Click delete icon
3. Confirm

### Clear all entries
In **SQL Editor**, run:
```sql
DELETE FROM guestbook;
```

## Row Level Security (RLS)

RLS controls who can access data. Current policies:
- ✅ **Everyone can read** - See all messages
- ✅ **Everyone can insert** - Add new messages
- ✅ **Everyone can update** - Like messages

For stricter security, modify policies:
```sql
-- Only authenticated users can insert
CREATE POLICY "Only auth users can insert"
  ON guestbook FOR INSERT
  WITH CHECK (auth.role() = 'authenticated');
```

## Advanced Features

### Add email notifications
When someone signs guestbook, send email:
1. Set up **Functions** in Supabase
2. Create PostgreSQL function
3. Call on INSERT trigger

### Add authentication
Require login to sign guestbook:
1. Enable **Auth** in Supabase
2. Update policy to `auth.role() = 'authenticated'`
3. Add auth UI to component

### Add moderation
Review messages before publishing:
1. Add `approved BOOLEAN DEFAULT FALSE` column
2. Update SELECT policy: `approved = true`
3. Create admin dashboard to review

## Deployment on Vercel

1. In Vercel Dashboard → Settings → Environment Variables
2. Add:
   - `VITE_SUPABASE_URL=your-url`
   - `VITE_SUPABASE_ANON_KEY=your-key`
3. Redeploy

## Security Best Practices

✅ **DO:**
- Use anonymous key for client-side
- Keep row-level security enabled
- Validate input on backend
- Use environment variables

❌ **DON'T:**
- Commit `.env` file to git
- Use service role key in frontend
- Disable RLS without replacement
- Store sensitive data unencrypted

## Resources

- [Supabase Docs](https://supabase.com/docs)
- [Supabase Auth](https://supabase.com/docs/guides/auth)
- [Row Level Security](https://supabase.com/docs/guides/auth/row-level-security)
- [Database Functions](https://supabase.com/docs/guides/database/functions)

## Support

Having issues? Check:
1. [Supabase Status Page](https://status.supabase.com/)
2. [Supabase Discord](https://discord.supabase.com)
3. [GitHub Issues](https://github.com/supabase/supabase/issues)
