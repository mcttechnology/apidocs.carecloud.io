---
title: Receiving CareCloud Notifications with AWS SNS Integration
---

## Overview

### AWS Simple Notification Service (SNS)

AWS Simple Notification Service (SNS) is a part of the AWS public cloud platform. It offers a highly available, remote,
and cost-effective network system that is scalable and well-suited for the volume of remote on-the-fly infrastructures.
SNS acts as a content alert and message alert service with active compliance, notably target-bound. Focused on
decoupling and operating procedures of automated exposure or events, it nudges different support bases and databases to
stay alert and immediate in their network-sensitive community of APIs, invocations, or information upgradation.

### SNS Notification in CareCloud

Specifically, in CareCloud, the CareCloud API can be configured to send AWS SNS notifications
upon the submission of attendance for an event in the CareConnect service. This option for processing events can be a
handy launchpad for data observing, kindling smoother SDK-driven web relays for large direct support workloads. This
attendance data is protocoled into the SNS structure, warranting tools to adjoin, real-time, on requisite conscription
for the same.

## Subscribing and Auto-Confirming to SNS Notifications

To receive these updates, you must make sure that HTTPS endpoint has the capability to handle the HTTP POST
requests that Amazon SNS uses to send the subscription confirmation and notification messages. Usually, this means
creating and deploying a web application that processes the HTTP requests from Amazon SNS.

Below is an example that will handle the auto-confirmation of AWS SNS subscription and SNS Note eventuality.

```csharp
using System;
using System.IO;
using System.Net;
using System.Web.Mvc;
using CareCloudEvents.Models;
using Newtonsoft.Json;

public class AmazonSNSSubscriptionController : Controller
{
    [HttpPost]
    public ActionResult Index()
    {
        var messageType = Request.Headers["x-amz-sns-message-type"].ToString();

        if (messageType == "SubscriptionConfirmation")
        {
            string jsonBody = await new StreamReader(Request.Body).ReadToEndAsync();
            var subscribeUrl = ParseSubscribeURL(jsonBody);

            using (var httpClient = new HttpClient())
            {
                var response = await httpClient.GetAsync(subscribeUrl);
                if (response.IsSuccessStatusCode)
                {
                    return Ok();
                }
            }
        }
        return Content("AWS-SNS Data Received");
    }

    private void ConfirmSubscription()
    {
        string message = "";

        // Get the raw data and parse it
        using (StreamReader reader = new StreamReader(Request.InputStream))
        {
            message = reader.ReadToEnd();
        }

        // Confirms the SNS Posting
        SNSMessage snsMessage = JsonConvert.DeserializeObject<SNSMessage>(message);

        if (snsMessage.Type == "SubscriptionConfirmation")
        {
            string url = snsMessage.SubscribeURL;
            // Auto-confirm the registration by directly hitting the endpoint
            HttpWebRequest request = (HttpWebRequest)WebRequest.Create(url);
            request.Method = "GET";
            HttpWebResponse response = (HttpWebResponse)request.GetResponse();

            if (response.StatusCode == HttpStatusCode.OK)
            {
                return Content("AWS SNS Auto-Subscription Confirmed");
            }
        }
    }
}

```

## Submission Event Message

The event type includes two categories: `attendance` and `parent-attendance`.

`attendance` signifies that the Provider is required to submit monthly attendance records along with their signature.

`parent-attendance` denotes the submission of a signature by the Family/Parent.

```json
{
  "id": "65f35b06e30c8a2e4578d118",
  "datasource_code": "cc-claim-attendance",
  "workspace_id": "636eeb5d8029cf0df6932c16",
  "bucket_id": "636eeb5d8029cf0df6932c16",
  "event_type": "attendance",
  "event_time": "2024-03-13T19:08:57.1633050Z"
}
```

Upon participation in the event, access to the attendance data can be obtained through the following API, utilizing the provided ID.

`GET /appdata/claim_attendance/retrieve?id=65f35b06e30c8a2e4578d118`
