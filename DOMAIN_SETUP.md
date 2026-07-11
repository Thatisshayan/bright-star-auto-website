# Brightstarautobody.ca Domain Setup Guide

## Overview

Your custom domain is **Brightstarautobody.ca** and is currently hosted on Netlify at `https://bright-star-auto.netlify.com`. This guide will help you connect your custom domain to Netlify and ensure everything works correctly.

---

## DNS Configuration for Brightstarautobody.ca

### Where to Configure DNS

You need to configure DNS records with your domain registrar (whoever you purchased the domain from). This is NOT done in Netlify, but rather in your registrar's DNS management panel.

**Common registrars:**

- GoDaddy
- Namecheap
- Google Domains
- Cloudflare
- Domain.com

### What You Need to Do

#### Option A: Using Netlify's Nameservers (Recommended - Easiest)

1. **Go to your domain registrar's dashboard**
   - Log in to the website where you purchased Brightstarautobody.ca

2. **Find DNS/Nameserver settings**
   - Look for "Nameservers", "DNS Settings", or "Domain Management"

3. **Replace nameservers with Netlify's nameservers:**

   ```
   dns1.netlify.com
   dns2.netlify.com
   dns3.netlify.com
   dns4.netlify.com
   ```

4. **In Netlify Dashboard:**
   - Go to https://app.netlify.com
   - Select "bright-star-auto" project
   - Go to **Site settings** → **Domain management**
   - Click "Add domain" or "Custom domain"
   - Enter: `brightstarautobody.ca`
   - Click "Verify DNS configuration"
   - If prompted, update nameservers (see step 3)

5. **Wait for DNS to propagate**
   - This typically takes 24-48 hours
   - You can check status at https://www.whatsmydns.net/

---

#### Option B: Using DNS Records (If You Can't Change Nameservers)

If your registrar doesn't allow nameserver changes, add these DNS records:

**A Record:**

```
Type: A
Name: @ (or leave blank)
Value: 75.2.60.5
```

**CNAME Record for www subdomain:**

```
Type: CNAME
Name: www
Value: bright-star-auto.netlify.app
```

**Steps:**

1. Go to your registrar's DNS settings
2. Add/modify the A record to point to Netlify
3. Add a CNAME record for www
4. Wait for propagation (24-48 hours)

---

## Verifying Your Domain is Working

### Check 1: Browser Test

1. Open `https://brightstarautobody.ca` in your browser
2. You should see the Bright Star Auto website
3. Check that the URL stays as `brightstarautobody.ca` (not redirecting to netlify.app)

### Check 2: Using Command Line (Optional)

```bash
# Test DNS resolution
nslookup brightstarautobody.ca

# Test if site is accessible
curl -I https://brightstarautobody.ca
```

Should return HTTP 200 status.

### Check 3: Netlify Status

1. Go to https://app.netlify.com
2. Select "bright-star-auto" project
3. Go to **Site settings** → **Domain management**
4. Look for status: "✅ DNS configured"

---

## SSL/HTTPS Certificate

Netlify automatically provides a free SSL certificate for your domain via Let's Encrypt. This happens automatically once DNS is configured.

**Verify HTTPS is working:**

- Visit `https://brightstarautobody.ca`
- Look for the green 🔒 lock icon in the address bar
- This should appear within a few minutes after DNS is set up

---

## Redirect old domain to new domain (Optional but Recommended)

If you had traffic at the old domain, redirect it to the new one:

**In Netlify:**

1. Go to **Site settings** → **Domain management**
2. Add the old domain as an alias (if applicable)
3. Set up a redirect in netlify.toml:

```toml
# In netlify.toml, add this at the top:
[[redirects]]
  from = "https://bright-star-auto.netlify.app/*"
  to = "https://brightstarautobody.ca/:splat"
  status = 301
  force = true
```

---

## Troubleshooting

### Domain not resolving / site not loading

- Wait 24-48 hours for DNS propagation
- Check DNS settings at https://www.whatsmydns.net/
- Verify nameservers are correctly set in registrar

### SSL certificate not appearing

- Clear browser cache (Ctrl+Shift+Delete)
- Wait 5-10 minutes after DNS setup completes
- Check Netlify dashboard for certificate status

### Redirected to netlify.app

- Your DNS is not configured correctly
- Go back to your registrar and verify nameservers

### www vs non-www versions not working

- Add CNAME record for `www` (see Option B above)
- Or use Netlify's "Primary domain" setting

---

## Next Steps

1. ✅ Configure DNS in your registrar
2. ✅ Verify domain in Netlify dashboard
3. ✅ Wait for propagation (24-48 hours)
4. ✅ Test `https://brightstarautobody.ca` in browser
5. ✅ Verify SSL certificate (green lock icon)
6. ⬜ Set up Google Business (see GOOGLE_BUSINESS_SETUP.md)

---

## Questions?

- **Netlify Support:** https://support.netlify.com
- **Check DNS status:** https://www.whatsmydns.net/
- **Registrar support:** Check your domain registrar's help docs
