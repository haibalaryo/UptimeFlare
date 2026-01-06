// This is a simplified example config file for quickstart
// Some not frequently used features are omitted/commented out here
// For a full-featured example, please refer to `uptime.config.full.ts`

// Don't edit this line
import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  // Title for your status page
  title: "Haibala Server Status",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://github.com/haibalaryo/UptimeFlare', label: 'GitHub' },
    { link: 'https://msky.haibala.com/', label: 'Nisu Station (Misskey)' },
    { link: 'https://haibala.com/', label: 'My Page' },
  ],
}

const workerConfig: WorkerConfig = {
  // Define all your monitors here
  monitors: [
    // Example HTTP Monitor
    {
      // `id` should be unique, history will be kept if the `id` remains constant
      id: 'msky_server',
      // `name` is used at status page and callback message
      name: 'Nisuru Station (Misskey)',
      // `method` should be a valid HTTP Method
      method: 'GET',
      // `target` is a valid URL
      target: 'https://msky.haibala.com',
      // [OPTIONAL] `tooltip` is ONLY used at status page to show a tooltip
      tooltip: 'Main Misskey Server',
      // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
      statusPageLink: 'https://msky.haibala.com',
      // [OPTIONAL] `expectedCodes` is an array of acceptable HTTP response codes, if not specified, default to 2xx
      expectedCodes: [200],
      // [OPTIONAL] `timeout` in millisecond, if not specified, default to 10000
      timeout: 10000,
      // [OPTIONAL] headers to be sent
      headers: {
        'User-Agent': 'Uptimeflare',
        // Authorization: 'Bearer YOUR_TOKEN_HERE',
      },
    },
    {
      id: 'mastodon_server',
      name: '癒やされたい (Mastodon)',
      method: 'GET',
      target: 'https://iyasaretai.pw',
      tooltip: 'Mastodon Server with Hostdon',
      statusPageLink: 'https://iyasaretai.pw',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
    // 追加監視対象
  ],
  notification: {
    webhook: {
       url: '',
       payloadType: 'json',
       payload: {}
    }
  }
}

// You can define multiple maintenances here
// During maintenance, an alert will be shown at status page
// Also, related downtime notifications will be skipped (if any)
// Of course, you can leave it empty if you don't need this feature

const maintenances: MaintenanceConfig[] = []

// const maintenances: MaintenanceConfig[] = [
//   {
//     // [Optional] Monitor IDs to be affected by this maintenance
//     monitors: ['foo_monitor', 'bar_monitor'],
//     // [Optional] default to "Scheduled Maintenance" if not specified
//     title: 'Test Maintenance',
//     // Description of the maintenance, will be shown at status page
//     body: 'This is a test maintenance, server software upgrade',
//     // Start time of the maintenance, in UNIX timestamp or ISO 8601 format
//     start: '2020-01-01T00:00:00+08:00',
//     // [Optional] end time of the maintenance, in UNIX timestamp or ISO 8601 format
//     // if not specified, the maintenance will be considered as on-going
//     end: '2050-01-01T00:00:00+08:00',
//     // [Optional] color of the maintenance alert at status page, default to "yellow"
//     color: 'blue',
//   },
// ]

// Don't edit this line
export { pageConfig, workerConfig, maintenances }
