process.env.APIFY_MEMORY_SNAPSHOT = "0";

import { PlaywrightCrawler } from 'crawlee';

const crawler = new PlaywrightCrawler({
    async requestHandler({ request, page, enqueueLinks, log }) {
        const title = await page.title();
        log.info(`Title of ${request.loadedUrl} is '${title}'`);
    },
});

await crawler.run(['https://tiki.vn']);
