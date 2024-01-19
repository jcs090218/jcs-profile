---
weight: 4
title: "First server migration"
date: 2022-09-10
tags: ["Server", "migration"]
categories: ["Server"]
author: ["Jen-Chieh Shen"]
cover:
  image: cover.png
  hiddenInList: true
draft: false
---

I have always been using AWS as my main web hosting choice. But I
have come to the point that I reckon the price and services aren't
something that I need. Therefore, I have decided to switch to another
web hosting company just for another taste.

<!-- more -->

The main reasons are listed below:

1. AWS charges you money when you click on their services without
notifying the user. I dislike how it functions.
2. The price is too high, plus I don't really need it
3. UI is awful, and UX is bad
4. Jargons aren't transferable (I'm picky)

Now, let's move into details.

### 📋 Transfer the domain name

The target domain I am transferring is [jcs-profile.com](https://who.is/whois/jcs-profile.com)
. If we checked who.is; the registrar is `amazon.com`. I bought the
domain name using AWS's [Route 53](https://aws.amazon.com/route53/).
But now, I would like to transfer it to [Namecheap](https://www.namecheap.com/)
. This isn't the cheapest choice, but I like their UI/UX. It's
simpler and looks much more organized compared to AWS's UI.

I watched the below video when I was picking my new domain name registrar.
I attempted to use [Google Domains](https://domains.google/) since
it's the best choice from the video, but it came out it doesn't support
my country/region, `Taiwan` (WIP). So I go for the second best choice,
which is Namecheap. 😅

{{< youtube G5KpAflMOng >}}

[Craylor Made](https://www.youtube.com/c/CraylorMade) explains very well!
Big thanks to him!

***NOTE:** It took them 5 days to complete transfer. So I'll have to wait
until the transfer is completed!*

### 📂 Transfer data

Transfer data is easy, I use [FileZilla](https://filezilla-project.org/)
(as always) to download all the files I need to move over to the
new server. Unlike `Node`, `PHP`, or `MySQL`; there isn't much
environment I need to set up (except the [Nginx](https://www.nginx.com/))
. We would just have to ensure **don't ever close the old server
until we have moved everything to the new server!**

Something I always want to try out is the [Docker](https://www.docker.com/)
migration. It sounds like fun to me! But I guess I will have to wait
until next time I get the opportunity.🙂

### 🩹 Restart our server

I have chosen [DigitalOcean](https://www.digitalocean.com/) as my new
web hosting company. Reasons are:

1. cheaper (relative to aws)
2. Easier to see what is charged and what not
3. Excellent UI
4. Documentation is great; the community seems to be friendly

The only defect is the server's location, and there aren't many locations
to choose.

First thing first, after transferring all the data. We need to update
the name servers so it can be redirected to the correct IP address.

The following video says it all. It's amazing!

{{< youtube zOPH54ltGLQ >}}

The old name servers from `AWS`,

```
ns-1375.awsdns-43.org
ns-1685.awsdns-18.co.uk
ns-804.awsdns-36.net
ns-93.awsdns-11.com
```

The new name servers from `DigitalOcean`,

```
ns1.digitalocean.com.
ns2.digitalocean.com.
ns3.digitalocean.com.
```

Then we need to modify the `DNS Records` from DigitalOcean's website.
We add `@` and `www` points to our new server (IP).

| Type | Hostname | Value      | TTL(seconds)   |
|:-----|:---------|:-----------|:---------------|
| A    | @        | IP address | 3600 (default) |
| A    | www      | IP address | 3600 (default) |

Then we are done! Hurray!~ 🥳🎉🎊
