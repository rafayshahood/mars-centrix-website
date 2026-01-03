// Test script to verify newsletter webhook integration
// This will simulate a newsletter signup and check if it triggers the n8n webhook

const testNewsletterWebhook = async () => {
  const testEmail = `test-${Date.now()}@example.com`;
  
  console.log('🧪 Testing newsletter webhook integration...');
  console.log('📧 Test email:', testEmail);
  
  try {
    // Call the newsletter API endpoint
    const response = await fetch('http://localhost:3000/api/newsletter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: testEmail,
        source: 'webhook_test'
      })
    });

    const result = await response.json();
    
    if (response.ok) {
      console.log('✅ Newsletter API Success:', result.message);
      console.log('📊 Subscriber data:', result.data);
      console.log('');
      console.log('🔄 Now check your n8n workflow to see if the webhook was triggered!');
      console.log('🎯 Expected webhook URL: https://n8n.srv1104211.hstgr.cloud/webhook-test/4712df69-c8db-4fd3-9168-04b831312437');
      console.log('');
      console.log('📋 Expected payload structure:');
      console.log({
        type: 'INSERT',
        table: 'newsletter_subscribers',
        record: {
          id: 'uuid',
          email: testEmail,
          source: 'webhook_test',
          subscribed_at: 'timestamp',
          is_active: true
        }
      });
    } else {
      console.error('❌ Newsletter API Error:', result.error);
    }
  } catch (error) {
    console.error('❌ Test failed:', error.message);
  }
};

// Run the test
testNewsletterWebhook();
