
DubDubDub it
============

Simple node.js server that takes in a request, adds a "www" to the hostname, and does a 301 Permanent Redirect to the new address.


Why?
====

Amazon's Elastic Load Balancer uses a CNAME to handle balancer requests, which means you can't
point a root domain (i.e. cykod.com) at one of their load balancers. 

To solve this, you can simple use a subdomain (such as www.cykod.com) for your website. Unfortunately people often 
link to or type in just the domain.com address as opposed to the full domain.

What this means is that you're going to need to get an actual IP address for your root domain. The simplest solution 
is just to point your root domain at one or two of your existing application servers, but this lessens your flexability to 
add, remove and scale application server machines as these machines will have public facing IP's and transfering a Elastic IP among machines 
is not an instaneous proposition.

Instead, if we treat the redirecting from domain.com to www.domain.com as a separate service in a Service Oriented Archtecture, we can keep a 
few separate machines up to handle the redirect requests and configure round robin DNS.

The addition of Amazon micro-instances (~$14/mo or ~$5/mo reserved) makes it an affordable proposition.

Additional Benefits
===================

* Simplified Setup - no web server required as all requests are served directly by the server.
* Your application server is hidden behind a load balancer, hiding the IP address of the system from intrusion attempts.





