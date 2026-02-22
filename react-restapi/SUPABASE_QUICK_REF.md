# Supabase Guestbook Quick Reference

## 🚀 Quick Start (5 minutes)

### 1. Create Supabase Account
```bash
# Go to https://supabase.com
# Click "Sign Up"
# Create a new project
```

### 2. Create Database Table
Copy and paste in **SQL Editor**:
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

-- Enable RLS
ALTER TABLE guestbook ENABLE ROW LEVEL SECURITY;

-- Allow public access
CREATE POLICY "Allow public to read"
  ON guestbook FOR SELECT USING (true);

CREATE POLICY "Allow public to insert"
  ON guestbook FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public to update likes"
  ON guestbook FOR UPDATE USING (true) WITH CHECK (true);
```

### 3. Get Your Credentials
In **Settings → API**, copy:
- `Project URL` → goes in `VITE_SUPABASE_URL`
- `anon (public)` key → goes in `VITE_SUPABASE_ANON_KEY`

### 4. Set Environment Variables
```bash
# Copy the example file
cp .env.example .env

# Edit .env and add your credentials:
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### 5. Test It!
```bash
npm run dev
# Visit http://localhost:5173/guestbook
```

---

## 📋 API Reference

### Get all entries
```javascript
import { guestbookService } from '../services/supabase';

const { data, error } = await guestbookService.getEntries();
// data = [{ id, name, email, message, likes, created_at }, ...]
// error = null if success
```

### Add new entry
```javascript
const { data, error } = await guestbookService.addEntry(
  name,       // string (optional, defaults to 'Anonymous')
  message,    // string (required)
  email       // string (optional)
);
```

### Like/React to entry
```javascript
const { data, error } = await guestbookService.toggleLike(
  id,            // entry ID
  currentLikes   // current like count
);
// Increments likes by 1
```

### Delete entry
```javascript
const { data, error } = await guestbookService.deleteEntry(id);
```

---

## 🎨 Guestbook Component Usage

```jsx
import Guestbook from './components/Guestbook';

// In your Router
<Route path="/guestbook" element={<Guestbook />} />
```

The component handles:
- ✅ Form validation
- ✅ Error handling
- ✅ Loading states
- ✅ Real-time entry display
- ✅ Character counting
- ✅ Success messages

---

## 🔒 Row Level Security Policies

### Default Policies
| Operation | Public | Authenticated |
|-----------|--------|---------------|
| SELECT | ✅ | ✅ |
| INSERT | ✅ | ✅ |
| UPDATE | ✅ | ✅ |
| DELETE | ❌ | ✅ |

### Restrict to authenticated only
```sql
-- For INSERT
CREATE POLICY "Only auth users can insert"
  ON guestbook FOR INSERT
  WITH CHECK (auth.role() = 'authenticated');
```

---

## 🐛 Troubleshooting

### Entries not showing
```javascript
// Check your console for errors
console.log(error); // See what went wrong

// Verify table exists in Supabase
// Go to Table Editor → check "guestbook" table
```

### Auth token expired
```javascript
// Your client automatically handles refresh
// No action needed - it's handled in supabase.js
```

### CORS errors
```
// Add your URL to Supabase CORS settings:
// Settings → API → CORS
// Add: http://localhost:5173 (dev)
//      https://your-domain.com (production)
```

### Messages not saving
1. Check RLS policies are enabled
2. Verify INSERT policy exists
3. Try adding from **Supabase Table Editor** directly

---

## 📊 Monitoring & Analytics

### In Supabase Dashboard
- **Logs** → View API calls, errors, auth events
- **Usage** → See storage, bandwidth, real-time usage
- **Table Editor** → View/edit guestbook data directly
- **Policies** → Manage row-level security

### Common Queries

#### Get latest 10 entries
```javascript
const { data } = await guestbookService.getEntries();
const latest = data?.slice(0, 10);
```

#### Get entry by ID
```javascript
const { data } = await supabase
  .from('guestbook')
  .select('*')
  .eq('id', 1)
  .single();
```

#### Count total entries
```javascript
const { count } = await supabase
  .from('guestbook')
  .select('*', { count: 'exact', head: true });
```

#### Get entries by email
```javascript
const { data } = await supabase
  .from('guestbook')
  .select('*')
  .eq('email', 'user@example.com');
```

---

## 🚀 Deployment Checklist

- [ ] Supabase project created
- [ ] Database table created with SQL
- [ ] RLS policies enabled
- [ ] Environment variables set in `.env`
- [ ] Authentication/authorization tested locally
- [ ] Guestbook component renders at `/guestbook`
- [ ] Can add entries without errors
- [ ] Entries persist and reload correctly
- [ ] Environment variables added to Vercel dashboard
- [ ] Deployed to Vercel successfully
- [ ] Test guestbook on live deployment

---

## 📚 Resources

- [Supabase Documentation](https://supabase.com/docs)
- [Supabase Auth Guide](https://supabase.com/docs/guides/auth)
- [Row Level Security](https://supabase.com/docs/guides/auth/row-level-security)
- [PostgreSQL Functions](https://supabase.com/docs/guides/database/functions)
- [Full Project Guide](./SUPABASE_SETUP.md)

---

## 💡 Pro Tips

**Tip 1:** Use Supabase Row Level Security to automatically filter entries by user
```sql
CREATE POLICY "Users see their own entries"
  ON guestbook
  FOR SELECT
  USING (auth.uid() = user_id);
```

**Tip 2:** Add email verification
```javascript
// In your signup flow
await authService.signUp(email, password);
// User must verify email before guestbook access
```

**Tip 3:** Add spam protection with rate limiting
```javascript
// Check if user signed guestbook in last 24 hours
const { data } = await supabase
  .from('guestbook')
  .select('*')
  .eq('email', userEmail)
  .gt('created_at', 24hrsAgo);
```

**Tip 4:** Archive old entries
```sql
-- Move entries older than 1 year to archive
INSERT INTO guestbook_archive
SELECT * FROM guestbook
WHERE created_at < NOW() - INTERVAL '1 year';

DELETE FROM guestbook
WHERE created_at < NOW() - INTERVAL '1 year';
```

---

## ❓ FAQ

**Q: Do I need authentication to use the guestbook?**
A: No! By default, anyone can sign the guestbook. You can enable auth later.

**Q: Can I edit existing entries?**
A: Currently, only likes can be updated. To edit messages, delete and re-add.

**Q: How much does Supabase cost?**
A: Free tier has 500MB storage and sufficient bandwidth for most sites. Paid plans start at $25/month.

**Q: Can I export guestbook entries?**
A: Yes! Use the **Table Editor** in Supabase to export as CSV.

**Q: What happens if my Supabase project is deleted?**
A: All guestbook entries will be lost. Export backups regularly!

---

**Happy guestbooking! 🎉**
