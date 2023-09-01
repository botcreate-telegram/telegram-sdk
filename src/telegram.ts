import {
  EditMessageText,
  EditMessageTextResult,
  ForwardMessage,
  ForwardMessageResult,
  GetChat,
  GetChatAdministrators,
  GetChatAdministratorsResult,
  GetChatResult,
  GetFile,
  GetFileResult,
  GetMeResult,
  PromoteChatMember,
  PromoteChatMemberResult,
  SendMessage,
  SendMessageResult,
  SetChatAdministratorCustomTitle,
  SetChatAdministratorCustomTitleResult,
  SetChatTitle,
  SetChatTitleResult,
  SetMyCommands,
  SetMyCommandsResult,
  SetWebhook,
  SetWebhookResult,
  WebhookInfoResult,
} from './types/methods';

export class Telegram {
  private readonly botToken: string;

  /** Provide Bot token on init */
  constructor(botToken: string) {
    this.botToken = botToken;
  }

  /** Use this method to send text messages. On success, the Message is returned. https://core.telegram.org/bots/api#sendmessage */
  public async sendMessage(data: SendMessage) {
    return this.telegramRequest<SendMessageResult>(
      'sendMessage',
      this.botToken,
      data,
    );
  }

  /** Use this method to edit text and game messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned. */
  public async editMessageText(data: EditMessageText) {
    return this.telegramRequest<EditMessageTextResult>(
      'editMessageText',
      this.botToken,
      data,
    );
  }

  /** Use this method to get current webhook status. Requires no parameters. On success, returns a WebhookInfo object. If the bot is using getUpdates, will return an object with the url field empty. */
  public async getWebhookInfo() {
    return this.telegramRequest<WebhookInfoResult>(
      'getWebhookInfo',
      this.botToken,
    );
  }

  /** Use this method to specify a URL and receive incoming updates via an outgoing webhook. Whenever there is an update for the bot, we will send an HTTPS POST request to the specified URL, containing a JSON-serialized Update. In case of an unsuccessful request, we will give up after a reasonable amount of attempts. Returns True on success. */
  public async setWebhook(data: SetWebhook) {
    return this.telegramRequest<SetWebhookResult>(
      'setWebhook',
      this.botToken,
      data,
    );
  }

  /** A simple method for testing your bot authentication token. Requires no parameters. Returns basic information about the bot in form of a User object. */
  public async getMe() {
    return this.telegramRequest<GetMeResult>('getMe', this.botToken);
  }

  public async setMyCommands(data: SetMyCommands) {
    return this.telegramRequest<SetMyCommandsResult>(
      'setMyCommands',
      this.botToken,
      data,
    );
  }

  /** Use this method to get information about the chat (current name of the user for one-on-one conversations, current username of a user, group or channel, etc.). Returns a Chat object on success. */
  public async getChat(data: GetChat) {
    return this.telegramRequest<GetChatResult>('getChat', this.botToken, data);
  }

  /** Use this method to get basic information about a file and prepare it for downloading. For the moment, bots can download files of up to 20MB in size. On success, a File object is returned. The file can then be downloaded via the link https://api.telegram.org/file/bot<token>/<file_path>, where <file_path> is taken from the response. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling getFile again. */
  public async getFile(data: GetFile) {
    return this.telegramRequest<GetFileResult>('getFile', this.botToken, data);
  }

  /** Use this method to get a list of administrators in a chat, which aren't bots. Returns an Array of ChatMember objects. */
  public async getChatAdministrators(data: GetChatAdministrators) {
    return this.telegramRequest<GetChatAdministratorsResult>(
      'getChatAdministrators',
      this.botToken,
      data,
    );
  }

  /** Use this method to set a custom title for an administrator in a supergroup promoted by the bot. Returns True on success. */
  public async setChatAdministratorCustomTitle(
    data: SetChatAdministratorCustomTitle,
  ) {
    return this.telegramRequest<SetChatAdministratorCustomTitleResult>(
      'setChatAdministratorCustomTitle',
      this.botToken,
      data,
    );
  }

  /** Use this method to promote or demote a user in a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Pass False for all boolean parameters to demote a user. Returns True on success. */
  public async promoteChatMember(data: PromoteChatMember) {
    return this.telegramRequest<PromoteChatMemberResult>(
      'promoteChatMember',
      this.botToken,
      data,
    );
  }

  /** Use this method to change the title of a chat. Titles can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success. */
  public async setChatTitle(data: SetChatTitle) {
    return this.telegramRequest<SetChatTitleResult>(
      'setChatTitle',
      this.botToken,
      data,
    );
  }

  /** Use this method to forward messages of any kind. Service messages can't be forwarded. On success, the Message is returned. */
  public async forwardMessage(data: ForwardMessage) {
    return this.telegramRequest<ForwardMessageResult>(
      'forwardMessage',
      this.botToken,
      data,
    );
  }

  private async telegramClient<T = unknown, E = Error>(
    token: string,
    endpoint: string,
    customConfig: RequestInit = {},
  ) {
    const { body, ...otherConfig } = customConfig;

    const config: RequestInit = {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body,
      ...otherConfig,
    };

    const response = await fetch(
      `https://api.telegram.org/bot${token}/${endpoint}`,
      config,
    );

    if (response.ok) {
      return (await response.json()) as T;
    }

    const errorMessage = await response.text();
    return (await Promise.reject(
      new Error(`${response.status}: ${response.statusText}, ${errorMessage}`),
    )) as E;
  }

  private async telegramRequest<T>(
    endpoint: string,
    token: string,
    data?: unknown,
  ) {
    try {
      return await this.telegramClient<T>(token, endpoint, {
        body: JSON.stringify(data),
      });
    } catch (e) {
      if (e instanceof Error) {
        return e;
      }
    }

    return Error(`Error unknown on postRequest: endpoint ${endpoint}`);
  }
}
