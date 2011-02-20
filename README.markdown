
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

The addition of Amazon micro-instances (~$14/mo or ~$5/mo reserved) makes it an affordable proposition. Basic load testing with Apache Bench shows
~3000 reqs/second on a single micro-instance. 

Additional Benefits
===================

* Simplified Setup - no web server required as all requests are served directly by the server.
* Your application servers are hidden behind a load balancer, hiding the IP address of the system from intrusion attempts.
* Because the DubDubDubIt server doesn't touch any credit card or user data, it won't factor into your PCI compliance


Installation
============

Launch a new amazon 32-bt micro instance
Login via ssh

   # Install required packages for compiling node
   sudo yum install gcc-c++ gcc python libssl-dev git

   # Get, configure, compile and install node
   wget http://nodejs.org/dist/node-v0.4.1.tar.gz
   tar -xzvf node-v0.4.1.tar.gz 
   cd node-v0.4.1
   ./configure --prefix=/usr/local --without-ssl
   make
   # Wait a while as micro instances are sloooooooow (it'll start fast then throttle the CPU)
   sudo make install
   cd ..

   # Get DubDubDubIt
   git clone git://github.com/cykod/DubDubDub-It.git dubdubdubit
   cd dubdubdubit
   sudo nohup node server.js &


Configuring With Upstart and Monit
=================================

    sudo yum install upstart monit





