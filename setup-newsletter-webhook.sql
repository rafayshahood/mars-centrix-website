-- ========================================
-- SUPABASE NEWSLETTER WEBHOOK SETUP
-- ========================================
-- ALTERNATIVE APPROACH: Use Supabase Database Webhooks (Recommended)
-- Go to Supabase Dashboard > Database > Webhooks and create a webhook with:
-- - Table: newsletter_subscribers
-- - Events: INSERT
-- - Type: HTTP Request
-- - URL: https://n8n.srv1104211.hstgr.cloud/webhook-test/4712df69-c8db-4fd3-9168-04b831312437
-- - HTTP Method: POST

-- ========================================
-- ALTERNATIVE: Edge Function Approach
-- ========================================
-- If you prefer to use Edge Functions, create this function:

-- 1. Enable the http extension (run this first)
CREATE EXTENSION IF NOT EXISTS http;

-- 2. Create the webhook function that will call n8n
CREATE OR REPLACE FUNCTION notify_newsletter_subscription()
RETURNS TRIGGER AS $$
DECLARE
  webhook_url TEXT := 'https://n8n.srv1104211.hstgr.cloud/webhook-test/4712df69-c8db-4fd3-9168-04b831312437';
  payload TEXT;
  response http_response;
BEGIN
  -- Create the payload to send to n8n
  payload := json_build_object(
    'event_type', 'newsletter_subscription',
    'table', 'newsletter_subscribers',
    'record', row_to_json(NEW),
    'timestamp', NOW()
  )::TEXT;

  -- Make the HTTP request to n8n webhook using http extension
  SELECT * INTO response FROM http_post(
    webhook_url,
    payload,
    'application/json'
  );

  -- Log the response (optional)
  RAISE NOTICE 'Webhook response: %', response.status;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 3. Create the trigger that fires when a new newsletter subscriber is inserted
DROP TRIGGER IF EXISTS newsletter_subscription_webhook ON newsletter_subscribers;

CREATE TRIGGER newsletter_subscription_webhook
  AFTER INSERT ON newsletter_subscribers
  FOR EACH ROW
  EXECUTE FUNCTION notify_newsletter_subscription();

-- ========================================
-- VERIFICATION QUERIES
-- ========================================
-- Run these to verify the setup worked correctly

-- Check if the function exists
SELECT proname, prosrc 
FROM pg_proc 
WHERE proname = 'notify_newsletter_subscription';

-- Check if the trigger exists
SELECT tgname, tgrelid::regclass, tgfoid::regproc
FROM pg_trigger 
WHERE tgname = 'newsletter_subscription_webhook';

-- Test the webhook (optional - this will actually send a test to n8n)
-- INSERT INTO newsletter_subscribers (email) VALUES ('test@example.com');
-- DELETE FROM newsletter_subscribers WHERE email = 'test@example.com';
