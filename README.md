# telegram-sdk

Telegram Bot API: all methods and objects. 100% typed.

## How to use

Install it from npm.

```shell
npm i @botcreate/telegram-sdk
```

Import Telegram from lib. Init it as a new class, provide Bot Token. Use available typed methods.

```ts
import { Telegram } from '@botcreate/telegram-sdk'

const telegramClient = new Telegram('<your bot token>')

const me = await telegramClient.getMe()
if (me instanceof Error) {
    // Some error
}

const botId = me.id
const botName = me.first_name
```

## Changelog

See CHANGELOG.md
