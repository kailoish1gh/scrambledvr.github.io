# scrambledvr.com

The website for SCRAMBLED, a multiplayer VR game for Meta Quest. GitHub Pages hosts it for free from this repo.

## Changing the words and links

Every word and link on the site is in **`content.js`**.

1. Click `content.js` above, then the pencil icon (**Edit this file**).
2. Change the text between the two `` ` `` marks. Keep the `` ` `` at both ends and the comma after each line.
3. Click **Commit changes**. The site updates in about a minute; the **Actions** tab turns green when it's live.

When the game is on the Meta store, paste the store link into `` metaStore: `` `` and every "COMING SOON" button becomes "GET IT ON META QUEST".

The browser-tab title and the text Discord shows for a posted link are at the top of `index.html`, between the two `LINK PREVIEW` lines.

## Pictures and the trailer

- `video/trailer.mp4` is the trailer. It plays muted behind the page, and with sound from the WATCH buttons. To replace it, open the `video` folder, then **Add file > Upload files** with a file of the same name. GitHub's website takes files up to 25 MB, in H.264 MP4 format.
- `images/modes/` has the picture for each mode. To use a screenshot instead, upload it (for example `images/forest.jpg`) and change that mode's `image` in `content.js`.
- To add a strip of screenshots under the wardrobe, upload them to `images/` and list them under `screenshots` in `content.js` (there's an example there).
- `images/wardrobe/` has the eggs on the shelf. The list of them is `wardrobe` in `content.js`.

## One-time setup

### 1. Turn on GitHub Pages
In this repo: **Settings > Pages**. Set **Source** to **Deploy from a branch**, then **Branch** to `main` and `/ (root)`, and **Save**. **Custom domain** should say `scrambledvr.com` (the `CNAME` file fills it in). A red "DNS check unsuccessful" is normal until step 2 is done.

### 2. Point scrambledvr.com at GitHub (IONOS)
Sign in at my.ionos.com, open **Domains & SSL**, click `scrambledvr.com`, and open the **DNS** tab. If IONOS says the domain is connected to one of its own products, change its destination or usage to an external service first.

Delete IONOS's old website records: every **A** and **AAAA** record with host name `@`, and any record with host name `www`. Leave MX and TXT records alone; those are for email.

Then add these (**Add record**, leave TTL as it is):

| Type  | Host name | Points to               |
|-------|-----------|-------------------------|
| A     | @         | 185.199.108.153         |
| A     | @         | 185.199.109.153         |
| A     | @         | 185.199.110.153         |
| A     | @         | 185.199.111.153         |
| AAAA  | @         | 2606:50c0:8000::153     |
| AAAA  | @         | 2606:50c0:8001::153     |
| AAAA  | @         | 2606:50c0:8002::153     |
| AAAA  | @         | 2606:50c0:8003::153     |
| CNAME | www       | kailoish1gh.github.io   |

It usually takes 10 to 60 minutes to switch over, and sometimes up to 48 hours.

### 3. Verify the domain (recommended)
This stops anyone else from claiming scrambledvr.com on GitHub. Open your account's **Settings > Pages** (profile picture, Settings, Pages), click **Add a domain**, and enter `scrambledvr.com`. In IONOS, add the **TXT** record GitHub shows: host name `_github-pages-challenge-kailoish1gh`, with the value GitHub gives you. Then click **Verify** on GitHub.

### 4. Turn on HTTPS
Back in this repo's **Settings > Pages**, once it says **DNS check successful**, tick **Enforce HTTPS**. If the box is greyed out, GitHub is still making the certificate; that can take up to a day.

### 5. Check it
Open https://scrambledvr.com and https://www.scrambledvr.com (www should jump to scrambledvr.com).

## If something's wrong

- **404 "There isn't a GitHub Pages site here":** Pages isn't on yet (step 1), or it needs another minute or two.
- **A red bar says content.js has a typo:** a `` ` `` or a comma went missing. Open `content.js`, click **History**, and compare with the last version.
- **The trailer doesn't play:** it has to be `video/trailer.mp4` exactly, in lowercase. Phones in Low Power Mode don't autoplay background video; the WATCH button still works.
- **"DNS check unsuccessful" for over an hour:** look up `scrambledvr.com` on dnschecker.org with type A. It should list only the four `185.199.x.153` addresses. Any other address is an old IONOS record to delete.
