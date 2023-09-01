import {
  BotCommand,
  BotCommandScope,
  Chat,
  ChatMember,
  ForceReply,
  InlineKeyboardMarkup,
  InputFile,
  Message,
  MessageEntity,
  ReplyKeyboardMarkup,
  ReplyKeyboardRemove,
  User,
  WebhookInfo,
} from './objects';

export interface SendMessage {
  /** Unique identifier for the target chat or username of the target channel (in the format @channel) */
  chat_id: string | number;
  /** Text of the message to be sent, 1-4096 characters after entities parsing */
  text: string;
  /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
  message_thread_id?: number;
  /** Mode for parsing entities in the message text. */
  parse_mode?: string;
  /** A JSON-serialized list of special entities that appear in message text, which can be specified instead of parse_mode */
  entities?: MessageEntity[];
  /** Disables link previews for links in this message */
  disable_web_page_preview?: boolean;
  /** Sends the message silently. Users will receive a notification with no sound. */
  disable_notification?: boolean;
  /** Protects the contents of the message from forwarding and saving */
  protect_content?: boolean;
  /** If the message is a reply, ID of the original message */
  reply_to_message_id?: number;
  /** Pass True if the message should be sent even if the specified replied-to message is not found */
  allow_sending_without_reply?: boolean;
  /** Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user. */
  reply_markup?:
    | InlineKeyboardMarkup
    | ReplyKeyboardMarkup
    | ReplyKeyboardRemove
    | ForceReply;
}

export interface SendMessageResult {
  ok: boolean;
  result: Message;
}

export interface SetWebhook {
  /** HTTPS URL to send updates to. Use an empty string to remove webhook integration */
  url: string;
  /** Upload your public key certificate so that the root certificate in use can be checked. See our self-signed guide for details. */
  certificate?: InputFile;
  /** The fixed IP address which will be used to send webhook requests instead of the IP address resolved through DNS */
  ip_address?: string;
  /** The maximum allowed number of simultaneous HTTPS connections to the webhook for update delivery, 1-100. Defaults to 40. Use lower values to limit the load on your bot server, and higher values to increase your bot throughput. */
  max_connections?: number;
  /** A JSON-serialized list of the update types you want your bot to receive. For example, specify [“message”, “edited_channel_post”, “callback_query”] to only receive updates of these types. See Update for a complete list of available update types. Specify an empty list to receive all update types except chat_member (default). If not specified, the previous setting will be used. Please note that this parameter doesn't affect updates created before the call to the setWebhook, so unwanted updates may be received for a short period of time. */
  allowed_updates?: string[];
  /** Pass True to drop all pending updates */
  drop_pending_updates?: boolean;
  /** A secret token to be sent in a header “X-Telegram-Bot-Api-Secret-Token” in every webhook request, 1-256 characters. Only characters A-Z, a-z, 0-9, _ and - are allowed. The header is useful to ensure that the request comes from a webhook set by you. */
  secret_token?: string;
}

export interface SetWebhookResult {
  ok: boolean;
  result: boolean;
  description?: string;
}

export interface WebhookInfoResult {
  status: boolean;
  result: WebhookInfo;
}

export interface GetMeResult {
  status: boolean;
  result: User;
}

export interface SetMyCommands {
  /** A JSON-serialized list of bot commands to be set as the list of the bot commands. At most 100 commands can be specified. */
  commands: BotCommand[];
  /** A JSON-serialized object, describing scope of users for which the commands are relevant. Defaults to BotCommandScopeDefault. */
  scope?: BotCommandScope;
  /** A two-letter ISO 639-1 language code. If empty, commands will be applied to all users from the given scope, for whose language there are no dedicated commands */
  language_code?: string;
}

export interface SetMyCommandsResult {
  ok: boolean;
  result: boolean;
}

export interface GetChat {
  chat_id: string | number;
}

export interface GetChatResult {
  ok: boolean;
  result: Chat;
}

export interface GetFile {
  /** File identifier to get information about */
  file_id: string;
}

export interface GetFileResult {
  ok: boolean;
  result: File;
}

export interface GetChatAdministrators {
  /** Unique identifier for the target chat or username of the target supergroup (in the format @username) */
  chat_id: number | string;
}

export interface GetChatAdministratorsResult {
  ok: boolean;
  result: ChatMember[];
}

export interface SetChatAdministratorCustomTitle {
  /** Unique identifier for the target chat or username of the target supergroup (in the format @username) */
  chat_id: number | string;
  /** Unique identifier of the target user */
  user_id: number;
  /** New custom title for the administrator; 0-16 characters, emoji are not allowed */
  custom_title: string;
}

export interface SetChatAdministratorCustomTitleResult {
  ok: boolean;
  result: boolean;
}

export interface PromoteChatMember {
  /** Unique identifier for the target chat or username of the target channel (in the format @username) */
  chat_id: string | number;
  /** Unique identifier of the target user */
  user_id: number;
  is_anonymous?: boolean;
  can_manage_chat?: boolean;
  can_post_messages?: boolean;
  can_edit_messages?: boolean;
  can_delete_messages?: boolean;
  can_manage_video_chats?: boolean;
  can_restrict_members?: boolean;
  /** Pass True if the administrator can add new administrators with a subset of their own privileges or demote administrators that they have promoted, directly or indirectly (promoted by administrators that were appointed by him) */
  can_promote_members?: boolean;
  can_change_info?: boolean;
  can_invite_users?: boolean;
  can_pin_messages?: boolean;
  can_manage_topics?: boolean;
}

export interface PromoteChatMemberResult {
  ok: boolean;
  result: boolean;
}

export interface SetChatTitle {
  /** Unique identifier for the target chat or username of the target channel (in the format @username) */
  chat_id: number | string;
  /** New chat title, 1-128 characters */
  title: string;
}

export interface SetChatTitleResult {
  ok: boolean;
  result: boolean;
}

export interface ForwardMessage {
  /** Unique identifier for the target chat or username of the target channel (in the format @username) */
  chat_id: string | number;
  /** Unique identifier for the target message thread (topic) of the forum; for forum supergroups only */
  message_thread_id?: number;
  /** Unique identifier for the chat where the original message was sent (or channel username in the format @username) */
  from_chat_id: string | number;
  /** Sends the message silently. Users will receive a notification with no sound. */
  disable_notification?: boolean;
  /** Protects the contents of the forwarded message from forwarding and saving */
  protect_content?: boolean;
  /** Message identifier in the chat specified in from_chat_id */
  message_id: number;
}

export interface ForwardMessageResult {
  ok: boolean;
  result: Message;
}

export interface EditMessageText {
  /** Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @username) */
  chat_id?: string | number;
  /** Required if inline_message_id is not specified. Identifier of the message to edit */
  message_id?: number;
  /** Required if chat_id and message_id are not specified. Identifier of the inline message */
  inline_message_id?: string;
  /** New text of the message, 1-4096 characters after entities parsing */
  text: string;
  /** Mode for parsing entities in the message text. See formatting options for more details. */
  parse_mode?: string;
  /** A JSON-serialized list of special entities that appear in message text, which can be specified instead of parse_mode */
  entities?: MessageEntity[];
  /** Disables link previews for links in this message */
  disable_web_page_preview?: boolean;
  /** A JSON-serialized object for an inline keyboard. */
  reply_markup?: InlineKeyboardMarkup;
}

export interface EditMessageTextResult {
  ok: boolean;
  result: Message;
}
