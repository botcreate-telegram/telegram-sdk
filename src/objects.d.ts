interface User {
  /** Unique identifier for this user or bot. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier. */
  id: number; // number from API, bigint in DB
  /** True, if this user is a bot */
  is_bot: boolean;
  /** User's or bot first name */
  first_name: string;
  /** User's or bot last name */
  last_name?: string;
  /** User's or bot username */
  username?: string;
  /** IETF language tag of the user's language */
  language_code?: string;
  /** True, if this user is a Telegram Premium user */
  is_premium?: boolean;
  /** True, if this user added the bot to the attachment menu */
  added_to_attachment_menu?: boolean;
  /** True, if the bot can be invited to groups. Returned only in getMe. */
  can_join_groups?: boolean;
  /** True, if privacy mode is disabled for the bot. Returned only in getMe. */
  can_read_all_group_messages?: boolean;
  /** True, if the bot supports inline queries. Returned only in getMe. */
  supports_inline_queries?: boolean;
}

interface UserShared {
  /** Identifier of the request */
  request_id: number;
  /** Identifier of the shared user. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier. The bot may not have access to the user and could be unable to use this identifier, unless the user is already known to the bot by some other means. */
  user_id: number;
}

interface Message {
  /** Unique message identifier inside this chat */
  message_id: number;
  /** Unique identifier of a message thread to which the message belongs; for supergroups only */
  message_thread_id?: number;
  /** Sender of the message; empty for messages sent to channels. For backward compatibility, the field contains a fake sender user in non-channel chats, if the message was sent on behalf of a chat. */
  from?: User;
  /** Sender of the message, sent on behalf of a chat. For example, the channel itself for channel posts, the supergroup itself for messages from anonymous group administrators, the linked channel for messages automatically forwarded to the discussion group. For backward compatibility, the field from contains a fake sender user in non-channel chats, if the message was sent on behalf of a chat. */
  sender_chat?: Chat;
  /** Date the message was sent in Unix time */
  date: number;
  /** Conversation the message belongs to */
  chat: Chat;
  /** For forwarded messages, sender of the original message */
  forward_from?: User;
  /** For messages forwarded from channels or from anonymous administrators, information about the original sender chat */
  forward_from_chat?: Chat;
  /** For messages forwarded from channels, identifier of the original message in the channel */
  forward_from_message_id?: number;
  /** For forwarded messages that were originally sent in channels or by an anonymous chat administrator, signature of the message sender if present */
  forward_signature?: string;
  /** Sender's name for messages forwarded from users who disallow adding a link to their account in forwarded messages */
  forward_sender_name?: string;
  /** For forwarded messages, date the original message was sent in Unix time */
  forward_date?: number;
  /** True, if the message is sent to a forum topic */
  is_topic_message?: boolean;
  /** True, if the message is a channel post that was automatically forwarded to the connected discussion group */
  is_automatic_forward?: boolean;
  /** For replies, the original message. Note that the Message object in this field will not contain further reply_to_message fields even if it itself is a reply. */
  reply_to_message?: Message;
  /** Bot through which the message was sent */
  via_bot?: User;
  /** Date the message was last edited in Unix time */
  edit_date?: number;
  /** True, if the message can't be forwarded */
  has_protected_content?: boolean;
  /** The unique identifier of a media message group this message belongs to */
  media_group_id?: string;
  /** Signature of the post author for messages in channels, or the custom title of an anonymous group administrator */
  author_signature?: string;
  /** For text messages, the actual UTF-8 text of the message */
  text?: string;
  /** For text messages, special entities like usernames, URLs, bot commands, etc. that appear in the text */
  entities?: MessageEntity[];
  /** Message is an animation, information about the animation. For backward compatibility, when this field is set, the document field will also be set */
  animation?: Animation;
  /** Message is an audio file, information about the file */
  audio?: Audio;
  /** Message is a general file, information about the file */
  document?: Document;
  /** Message is a photo, available sizes of the photo */
  photo?: PhotoSize[];
  /** Message is a sticker, information about the sticker */
  sticker?: Sticker;
  /** Message is a video, information about the video */
  video?: Video;
  /** Message is a video note, information about the video message */
  video_note?: VideoNote;
  /** Message is a voice message, information about the file */
  voice?: Voice;
  /** Caption for the animation, audio, document, photo, video or voice */
  caption?: string;
  /** For messages with a caption, special entities like usernames, URLs, bot commands, etc. that appear in the caption */
  caption_entities?: MessageEntity[];
  /** True, if the message media is covered by a spoiler animation */
  has_media_spoiler?: boolean;
  /** Message is a shared contact, information about the contact */
  contact?: Contact;
  /** Message is dice with random value */
  dice?: Dice;
  /** Message is a game, information about the game. */
  game?: Game;
  /** Message is a native poll, information about the poll */
  poll?: Poll;
  /** Message is a venue, information about the venue. For backward compatibility, when this field is set, the location field will also be set */
  venue?: Venue;
  /** Message is a shared location, information about the location */
  location?: Location;
  /** New members that were added to the group or supergroup and information about them (the bot itself may be one of these members) */
  new_chat_members?: User[];
  /** A member was removed from the group, information about them (this member may be the bot itself) */
  left_chat_member?: User;
  /** A chat title was changed to this value */
  new_chat_title?: string;
  /** A chat photo was change to this value */
  new_chat_photo?: PhotoSize[];
  /** Service message: the chat photo was deleted */
  delete_chat_photo?: boolean;
  /** Service message: the group has been created */
  group_chat_created?: boolean;
  /** Service message: the supergroup has been created. This field can't be received in a message coming through updates, because bot can't be a member of a supergroup when it is created. It can only be found in reply_to_message if someone replies to a very first message in a directly created supergroup. */
  supergroup_chat_created?: boolean;
  /** Service message: the channel has been created. This field can't be received in a message coming through updates, because bot can't be a member of a channel when it is created. It can only be found in reply_to_message if someone replies to a very first message in a channel. */
  channel_chat_created?: boolean;
  /** Service message: auto-delete timer settings changed in the chat */
  message_auto_delete_timer_changed?: MessageAutoDeleteTimerChanged;
  /** The group has been migrated to a supergroup with the specified identifier. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier. */
  migrate_to_chat_id?: number;
  /** The supergroup has been migrated from a group with the specified identifier. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier. */
  migrate_from_chat_id?: number;
  /** Specified message was pinned. Note that the Message object in this field will not contain further reply_to_message fields even if it is itself a reply. */
  pinned_message?: Message;
  /** Message is an invoice for a payment, information about the invoice. */
  invoice?: Invoice;
  /** Message is a service message about a successful payment, information about the payment. */
  successful_payment?: SuccessfulPayment;
  /** Service message: a user was shared with the bot */
  user_shared?: UserShared;
  /** Service message: a chat was shared with the bot */
  chat_shared?: ChatShared;
  /** The domain name of the website on which the user has logged in. */
  connected_website?: string;
  /** Service message: the user allowed the bot added to the attachment menu to write messages */
  write_access_allowed?: WriteAccessAllowed;
  /** Telegram Passport data */
  passport_data?: PassportData;
  /** Service message. A user in the chat triggered another user's proximity alert while sharing Live Location. */
  proximity_alert_triggered?: ProximityAlertTriggered;
  /** Service message: forum topic created */
  forum_topic_created?: ForumTopicCreated;
  /** Service message: forum topic edited */
  forum_topic_edited?: ForumTopicEdited;
  /** Service message: forum topic closed */
  forum_topic_closed?: ForumTopicClosed;
  /** Service message: forum topic reopened */
  forum_topic_reopened?: ForumTopicReopened;
  /** Service message: the 'General' forum topic hidden */
  general_forum_topic_hidden?: GeneralForumTopicHidden;
  /** Service message: the 'General' forum topic unhidden */
  general_forum_topic_unhidden?: GeneralForumTopicUnhidden;
  /** Service message: video chat scheduled */
  video_chat_scheduled?: VideoChatScheduled;
  /** Service message: video chat started */
  video_chat_started?: VideoChatStarted;
  /** Service message: video chat ended */
  video_chat_ended?: VideoChatEnded;
  /** Service message: new participants invited to a video chat */
  video_chat_participants_invited?: VideoChatParticipantsInvited;
  /** Service message: data sent by a Web App */
  web_app_data?: WebAppData;
  /** Inline keyboard attached to the message. login_url buttons are represented as ordinary url buttons */
  reply_markup?: InlineKeyboardMarkup;
}

interface MessageEntity {
  /** Type of the entity. Currently, can be “mention” (@username), “hashtag” (#hashtag), “cashtag” ($USD), “bot_command” (/start@jobs_bot), “url” (https://telegram.org), “email” (do-not-reply@telegram.org), “phone_number” (+1-212-555-0123), “bold” (bold text), “italic” (italic text), “underline” (underlined text), “strikethrough” (strikethrough text), “spoiler” (spoiler message), “code” (mono width string), “pre” (mono width block), “text_link” (for clickable text URLs), “text_mention” (for users without usernames), “custom_emoji” (for inline custom emoji stickers) */
  type:
    | 'mention'
    | 'hashtag'
    | 'cashtag'
    | 'bot_command'
    | 'url'
    | 'email'
    | 'phone_number'
    | 'bold'
    | 'italic'
    | 'underline'
    | 'strikethrough'
    | 'spoiler'
    | 'code'
    | 'pre'
    | 'text_link'
    | 'text_mention'
    | 'custom_emoji';
  /** Offset in UTF-16 code units to the start of the entity */
  offset: number;
  /** Length of the entity in UTF-16 code units */
  length: number;
  /** For “text_link” only, URL that will be opened after user taps on the text */
  url?: string;
  /** For “text_mention” only, the mentioned user */
  user?: User;
  /** For “pre” only, the programming language of the entity text */
  language?: string;
  /** For “custom_emoji” only, unique identifier of the custom emoji. Use getCustomEmojiStickers to get full information about the sticker */
  custom_emoji_id?: string;
}

interface MessageAutoDeleteTimerChanged {
  /** New auto-delete time for messages in the chat; in seconds */
  message_auto_delete_time: number;
}

interface Location {
  /** Float. Longitude as defined by sender */
  longitude: number;
  /** Float. Latitude as defined by sender */
  latitude: number;
  /** Float or Number. The radius of uncertainty for the location, measured in meters; 0-1500 */
  horizontal_accuracy?: number;
  /** Time relative to the message sending date, during which the location can be updated; in seconds. For active live locations only. */
  live_period?: number;
  /** The direction in which user is moving, in degrees; 1-360. For active live locations only. */
  heading?: number;
  /** The maximum distance for proximity alerts about approaching another chat member, in meters. For sent live locations only. */
  proximity_alert_radius?: number;
}

interface Chat {
  /** Unique identifier for this chat. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier. */
  id: number; // number from API, bigint in DB
  /** Type of chat, can be either “private”, “group”, “supergroup” or “channel” */
  type: 'private' | 'group' | 'supergroup' | 'channel';
  /** Title, for supergroups, channels and group chats */
  title?: string;
  /** Username, for private chats, supergroups and channels if available */
  username?: string;
  /** First name of the other party in a private chat */
  first_name?: string;
  /** Last name of the other party in a private chat */
  last_name?: string;
  /** True, if the supergroup chat is a forum (has topics enabled) */
  is_forum?: boolean;
  /** Chat photo. Returned only in getChat. */
  photo?: ChatPhoto;
  /** If non-empty, the list of all active chat usernames; for private chats, supergroups and channels. Returned only in getChat. */
  active_usernames?: string[];
  /** Custom emoji identifier of emoji status of the other party in a private chat. Returned only in getChat. */
  emoji_status_custom_emoji_id?: string;
  /** Bio of the other party in a private chat. Returned only in getChat. */
  bio?: string;
  /** True, if privacy settings of the other party in the private chat allows to use tg://user?id=<user_id> links only in chats with the user. Returned only in getChat. */
  has_private_forwards?: boolean;
  /** True, if the privacy settings of the other party restrict sending voice and video note messages in the private chat. Returned only in getChat. */
  has_restricted_voice_and_video_messages?: boolean;
  /** True, if users need to join the supergroup before they can send messages. Returned only in getChat. */
  join_to_send_messages?: boolean;
  /** True, if all users directly joining the supergroup need to be approved by supergroup administrators. Returned only in getChat. */
  join_by_request?: boolean;
  /** Description, for groups, supergroups and channel chats. Returned only in getChat. */
  description?: string;
  /** Primary invite link, for groups, supergroups and channel chats. Returned only in getChat. */
  invite_link?: string;
  /** The most recent pinned message (by sending date). Returned only in getChat. */
  pinned_message?: Message;
  /** Default chat member permissions, for groups and supergroups. Returned only in getChat. */
  permissions?: ChatPermissions;
  /** For supergroups, the minimum allowed delay between consecutive messages sent by each unprivileged user; in seconds. Returned only in getChat. */
  slow_mode_delay?: number;
  /** The time after which all messages sent to the chat will be automatically deleted; in seconds. Returned only in getChat. */
  message_auto_delete_time?: number;
  /** True, if aggressive anti-spam checks are enabled in the supergroup. The field is only available to chat administrators. Returned only in getChat. */
  has_aggressive_anti_spam_enabled?: boolean;
  /** True, if non-administrators can only get the list of bots and administrators in the chat. Returned only in getChat. */
  has_hidden_members?: boolean;
  /** True, if messages from the chat can't be forwarded to other chats. Returned only in getChat. */
  has_protected_content?: boolean;
  /** For supergroups, name of group sticker set. Returned only in getChat. */
  sticker_set_name?: string;
  /** True, if the bot can change the group sticker set. Returned only in getChat. */
  can_set_sticker_set?: boolean;
  /** Unique identifier for the linked chat, i.e. the discussion group identifier for a channel and vice versa; for supergroups and channel chats. This identifier may be greater than 32 bits and some programming languages may have difficulty/silent defects in interpreting it. But it is smaller than 52 bits, so a signed 64bit integer or double-precision float type are safe for storing this identifier. Returned only in getChat. */
  linked_chat_id?: number;
  /** For supergroups, the location to which the supergroup is connected. Returned only in getChat. */
  location?: ChatLocation;
}

interface ChatLocation {
  /** The location to which the supergroup is connected. Can't be a live location. */
  location: Location;
  /** Location address; 1-64 characters, as defined by the chat owner */
  address: string;
}

interface ChatPermissions {
  can_send_messages?: boolean;
  can_send_audios?: boolean;
  can_send_documents?: boolean;
  can_send_photos?: boolean;
  can_send_videos?: boolean;
  can_send_video_notes?: boolean;
  can_send_voice_notes?: boolean;
  can_send_polls?: boolean;
  can_send_other_messages?: boolean;
  can_add_web_page_previews?: boolean;
  can_change_info?: boolean;
  can_invite_users?: boolean;
  can_pin_messages?: boolean;
  can_manage_topics?: boolean;
}

interface ChatPhoto {
  /** File identifier of small (160x160) chat photo. This file_id can be used only for photo download and only for as long as the photo is not changed. */
  small_file_id: string;
  /** Unique file identifier of small (160x160) chat photo, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
  small_file_unique_id: string;
  /** File identifier of big (640x640) chat photo. This file_id can be used only for photo download and only for as long as the photo is not changed. */
  big_file_id: string;
  /** Unique file identifier of big (640x640) chat photo, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
  big_file_unique_id: string;
}

interface ChatShared {
  /** Identifier of the request */
  request_id: number;
  /** Identifier of the shared chat. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier. The bot may not have access to the chat and could be unable to use this identifier, unless the chat is already known to the bot by some other means. */
  chat_id: number;
}

interface ChatAdministratorRights {
  is_anonymous: boolean;
  can_manage_chat: boolean;
  can_delete_messages: boolean;
  can_manage_video_chats: boolean;
  can_restrict_members: boolean;
  can_promote_members: boolean;
  can_change_info: boolean;
  can_invite_users: boolean;
  can_post_messages?: boolean;
  can_edit_messages?: boolean;
  can_pin_messages?: boolean;
  can_manage_topics?: boolean;
}

type ChatMember =
  | ChatMemberOwner
  | ChatMemberAdministrator
  | ChatMemberMember
  | ChatMemberRestricted
  | ChatMemberLeft
  | ChatMemberBanned;

interface ChatMemberOwner {
  /** The member's status in the chat, always “creator” */
  status: 'creator';
  /** Information about the user */
  user: User;
  /** True, if the user's presence in the chat is hidden */
  is_anonymous: boolean;
  /** Custom title for this user */
  custom_title?: string;
}

interface ChatMemberAdministrator {
  /** The member's status in the chat, always “administrator” */
  status: 'administrator';
  /** Information about the user */
  user: User;
  /** True, if the bot is allowed to edit administrator privileges of that user */
  can_be_edited: boolean;
  /** True, if the user's presence in the chat is hidden */
  is_anonymous: boolean;
  /** True, if the administrator can access the chat event log, chat statistics, message statistics in channels, see channel members, see anonymous administrators in supergroups and ignore slow mode. Implied by any other administrator privilege */
  can_manage_chat: boolean;
  /** True, if the administrator can delete messages of other users */
  can_delete_messages: boolean;
  /** True, if the administrator can manage video chats */
  can_manage_video_chats: boolean;
  /** True, if the administrator can restrict, ban or unban chat members */
  can_restrict_members: boolean;
  /** True, if the administrator can add new administrators with a subset of their own privileges or demote administrators that they have promoted, directly or indirectly (promoted by administrators that were appointed by the user) */
  can_promote_members: boolean;
  /** True, if the user is allowed to change the chat title, photo and other settings */
  can_change_info: boolean;
  /** True, if the user is allowed to invite new users to the chat */
  can_invite_users: boolean;
  /** True, if the administrator can post in the channel; channels only */
  can_post_messages?: boolean;
  /** True, if the administrator can edit messages of other users and can pin messages; channels only */
  can_edit_messages?: boolean;
  /** True, if the user is allowed to pin messages; groups and supergroups only */
  can_pin_messages?: boolean;
  /** True, if the user is allowed to create, rename, close, and reopen forum topics; supergroups only */
  can_manage_topics?: boolean;
  /** Custom title for this user */
  custom_title?: string;
}

interface ChatMemberMember {
  /** The member's status in the chat, always “member” */
  status: 'member';
  /** Information about the user */
  user: User;
}

interface ChatMemberRestricted {
  /** The member's status in the chat, always “restricted” */
  status: 'restricted';
  /** Information about the user */
  user: User;
  /** True, if the user is a member of the chat at the moment of the request */
  is_member: boolean;
  /** True, if the user is allowed to send text messages, contacts, invoices, locations and venues */
  can_send_messages: boolean;
  /** True, if the user is allowed to send audios */
  can_send_audios: boolean;
  can_send_documents: boolean;
  can_send_photos: boolean;
  can_send_videos: boolean;
  can_send_video_notes: boolean;
  can_send_voice_notes: boolean;
  can_send_polls: boolean;
  can_send_other_messages: boolean;
  can_add_web_page_previews: boolean;
  can_change_info: boolean;
  can_invite_users: boolean;
  can_pin_messages: boolean;
  can_manage_topics: boolean;
  /** Date when restrictions will be lifted for this user; unix time. If 0, then the user is restricted forever */
  until_date: number;
}

interface ChatMemberLeft {
  /** The member's status in the chat, always “left” */
  status: 'left';
  /** Information about the user */
  user: User;
}

interface ChatMemberBanned {
  /** The member's status in the chat, always “kicked” */
  status: 'kicked';
  /** Information about the user */
  user: User;
  /** Date when restrictions will be lifted for this user; unix time. If 0, then the user is banned forever */
  until_date: number;
}

interface ChatMemberUpdated {
  /** Chat the user belongs to */
  chat: Chat;
  /** Performer of the action, which resulted in the change */
  from: User;
  /** Date the change was done in Unix time */
  date: number;
  /** Previous information about the chat member */
  old_chat_member: ChatMember;
  /** New information about the chat member */
  new_chat_member: ChatMember;
  /** Chat invite link, which was used by the user to join the chat; for joining by invite link events only. */
  invite_link?: ChatInviteLink;
  /** True, if the user joined the chat via a chat folder invite link */
  via_chat_folder_invite_link?: boolean;
}

interface ChatInviteLink {
  /** The invite link. If the link was created by another chat administrator, then the second part of the link will be replaced with “…”. */
  invite_link: string;
  /** Creator of the link */
  creator: User;
  /** True, if users joining the chat via the link need to be approved by chat administrators */
  creates_join_request: boolean;
  /** True, if the link is primary */
  is_primary: boolean;
  /** True, if the link is revoked */
  is_revoked: boolean;
  /** Invite link name */
  name?: string;
  /** Point in time (Unix timestamp) when the link will expire or has been expired */
  expire_date?: number;
  /** The maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link; 1-99999 */
  member_limit?: number;
  /** Number of pending join requests created using this link */
  pending_join_request_count?: number;
}

interface ChatJoinRequest {
  /** Chat to which the request was sent */
  chat: Chat;
  /** User that sent the join request */
  from: User;
  /** Identifier of a private chat with the user who sent the join request. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier. The bot can use this identifier for 24 hours to send messages until the join request is processed, assuming no other administrator contacted the user. */
  user_chat_id: number;
  /** Date the request was sent in Unix time */
  date: number;
  /** Bio of the user. */
  bio?: string;
  /** Chat invite link that was used by the user to send the join request */
  invite_link?: ChatInviteLink;
}

interface PhotoSize {
  /** Identifier for this file, which can be used to download or reuse the file */
  file_id: string;
  /** Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
  file_unique_id: string;
  /** Photo width */
  width: number;
  /** Photo height */
  height: number;
  /** File size in bytes */
  file_size?: number;
}

interface Poll {
  /** Unique poll identifier */
  id: string;
  /** Poll question, 1-300 characters */
  question: string;
  /** List of poll options */
  options: PollOption[];
  /** Total number of users that voted in the poll */
  total_voter_count: number;
  /** True, if the poll is closed */
  is_closed: boolean;
  /** True, if the poll is anonymous */
  is_anonymous: boolean;
  /** Poll type, currently can be “regular” or “quiz” */
  type: 'regular' | 'quiz';
  /** True, if the poll allows multiple answers */
  allows_multiple_answers: boolean;
  /** 0-based identifier of the correct answer option. Available only for polls in the quiz mode, which are closed, or was sent (not forwarded) by the bot or to the private chat with the bot. */
  correct_option_id?: number;
  /** Text that is shown when a user chooses an incorrect answer or taps on the lamp icon in a quiz-style poll, 0-200 characters */
  explanation?: string;
  /** Special entities like usernames, URLs, bot commands, etc. that appear in the explanation */
  explanation_entities?: MessageEntity[];
  /** Amount of time in seconds the poll will be active after creation */
  open_period?: number;
  /** Point in time (Unix timestamp) when the poll will be automatically closed */
  close_date?: number;
}

interface PollOption {
  /** Option text, 1-100 characters */
  text: string;
  /** Number of users that voted for this option */
  voter_count: number;
}

interface PollAnswer {
  /** Unique poll identifier */
  poll_id: string;
  /** The user, who changed the answer to the poll */
  user: User;
  /** 0-based identifiers of answer options, chosen by the user. May be empty if the user retracted their vote. */
  option_ids: number[];
}

interface Venue {
  /** Venue location. Can't be a live location */
  location: Location;
  /** Name of the venue */
  title: string;
  /** Address of the venue */
  address: string;
  /** Foursquare identifier of the venue */
  foursquare_id?: string;
  /** Foursquare type of the venue. (For example, “arts_entertainment/default”, “arts_entertainment/aquarium” or “food/icecream”.) */
  foursquare_type?: string;
  /** Google Places identifier of the venue */
  google_place_id?: string;
  /** Google Places type of the venue. */
  google_place_type?: string;
}

interface InlineKeyboardButton {
  /** Label text on the button */
  text: string;
  /** HTTP or tg:// URL to be opened when the button is pressed. Links tg://user?id=<user_id> can be used to mention a user by their ID without using a username, if this is allowed by their privacy settings. */
  url?: string;
  /** Data to be sent in a callback query to the bot when button is pressed, 1-64 bytes */
  callback_data?: string;
  /** Description of the Web App that will be launched when the user presses the button. The Web App will be able to send an arbitrary message on behalf of the user using the method answerWebAppQuery. Available only in private chats between a user and the bot. */
  web_app?: WebAppInfo;
  /** An HTTPS URL used to automatically authorize the user. Can be used as a replacement for the Telegram Login Widget. */
  login_url?: LoginUrl;
  switch_inline_query?: string;
  switch_inline_query_current_chat?: string;
  switch_inline_query_chosen_chat?: SwitchInlineQueryChosenChat;
  callback_game?: CallbackGame;
  /** Specify True, to send a Pay button. NOTE: This type of button must always be the first button in the first row and can only be used in invoice messages. */
  pay?: boolean;
}

interface InlineKeyboardMarkup {
  /** Array of button rows, each represented by an Array of InlineKeyboardButton objects */
  inline_keyboard: InlineKeyboardButton[][];
}

interface InlineQuery {
  /** Unique identifier for this query */
  id: string;
  /** Sender */
  from: User;
  /** Text of the query (up to 256 characters) */
  query: string;
  /** Offset of the results to be returned, can be controlled by the bot */
  offset: string;
  /** Type of the chat from which the inline query was sent. Can be either “sender” for a private chat with the inline query sender, “private”, “group”, “supergroup”, or “channel”. The chat type should be always known for requests sent from official clients and most third-party clients, unless the request was sent from a secret chat */
  chat_type?: 'sender' | 'private' | 'group' | 'supergroup' | 'channel';
  /** Sender location, only for bots that request user location */
  location?: Location;
}

interface ChosenInlineResult {
  /** The unique identifier for the result that was chosen */
  result_id: string;
  /** The user that chose the result */
  from: User;
  /** Sender location, only for bots that require user location */
  location?: Location;
  /** Identifier of the inline message. Available only if there is an inline keyboard attached to the message. Will be also received in callback queries and can be used to edit the message. */
  inline_message_id?: string;
  /** The query that was used to obtain the result */
  query: string;
}

interface KeyboardButton {
  /** Text of the button. If none of the optional fields are used, it will be sent as a message when the button is pressed */
  text: string;
  /** If specified, pressing the button will open a list of suitable users. Tapping on any user will send their identifier to the bot in a “user_shared” service message. Available in private chats only. */
  request_user?: KeyboardButtonRequestUser;
  /** If specified, pressing the button will open a list of suitable chats. Tapping on a chat will send its identifier to the bot in a “chat_shared” service message. Available in private chats only. */
  request_chat?: KeyboardButtonRequestChat;
  /** If True, the user's phone number will be sent as a contact when the button is pressed. Available in private chats only. */
  request_contact?: boolean;
  /** If True, the user's current location will be sent when the button is pressed. Available in private chats only. */
  request_location?: boolean;
  /** If specified, the user will be asked to create a poll and send it to the bot when the button is pressed. Available in private chats only. */
  request_poll?: KeyboardButtonPollType;
  /** If specified, the described Web App will be launched when the button is pressed. The Web App will be able to send a “web_app_data” service message. Available in private chats only. */
  web_app?: WebAppInfo;
}

interface KeyboardButtonRequestUser {
  /** Signed 32-bit identifier of the request, which will be received back in the UserShared object. Must be unique within the message */
  request_id: number;
  /** Pass True to request a bot, pass False to request a regular user. If not specified, no additional restrictions are applied. */
  user_is_bot?: boolean;
  /** Pass True to request a premium user, pass False to request a non-premium user. If not specified, no additional restrictions are applied. */
  user_is_premium?: boolean;
}

interface KeyboardButtonRequestChat {
  /** Signed 32-bit identifier of the request, which will be received back in the ChatShared object. Must be unique within the message */
  request_id: number;
  /** Pass True to request a channel chat, pass False to request a group or a supergroup chat. */
  chat_is_channel: boolean;
  /** Pass True to request a forum supergroup, pass False to request a non-forum chat. If not specified, no additional restrictions are applied. */
  chat_is_forum?: boolean;
  /** Pass True to request a supergroup or a channel with a username, pass False to request a chat without a username. If not specified, no additional restrictions are applied. */
  chat_has_username?: boolean;
  /** Pass True to request a chat owned by the user. Otherwise, no additional restrictions are applied. */
  chat_is_created?: boolean;
  /** A JSON-serialized object listing the required administrator rights of the user in the chat. The rights must be a superset of bot_administrator_rights. If not specified, no additional restrictions are applied. */
  user_administrator_rights?: ChatAdministratorRights;
  /** A JSON-serialized object listing the required administrator rights of the bot in the chat. The rights must be a subset of user_administrator_rights. If not specified, no additional restrictions are applied. */
  bot_administrator_rights?: ChatAdministratorRights;
  /** Pass True to request a chat with the bot as a member. Otherwise, no additional restrictions are applied. */
  bot_is_member?: boolean;
}

interface KeyboardButtonPollType {
  /** If quiz is passed, the user will be allowed to create only polls in the quiz mode. If regular is passed, only regular polls will be allowed. Otherwise, the user will be allowed to create a poll of any type. */
  type?: string;
}

interface ReplyKeyboardMarkup {
  /** Array of button rows, each represented by an Array of KeyboardButton objects */
  keyboard: KeyboardButton[][];
  /** Requests clients to always show the keyboard when the regular keyboard is hidden. Defaults to false, in which case the custom keyboard can be hidden and opened with a keyboard icon. */
  is_persistent?: boolean;
  /** Requests clients to resize the keyboard vertically for optimal fit (e.g., make the keyboard smaller if there are just two rows of buttons). Defaults to false, in which case the custom keyboard is always of the same height as the app's standard keyboard. */
  resize_keyboard?: boolean;
  /** Requests clients to hide the keyboard as soon as it's been used. The keyboard will still be available, but clients will automatically display the usual letter-keyboard in the chat - the user can press a special button in the input field to see the custom keyboard again. Defaults to false. */
  one_time_keyboard?: boolean;
  /** The placeholder to be shown in the input field when the keyboard is active; 1-64 characters */
  input_field_placeholder?: string;
  /** Use this parameter if you want to show the keyboard to specific users only. Targets: 1) users that are @mentioned in the text of the Message object; 2) if the bot message is a reply (has reply_to_message_id), sender of the original message. Example: A user requests to change the bot language, bot replies to the request with a keyboard to select the new language. Other users in the group don't see the keyboard. */
  selective?: boolean;
}

interface ReplyKeyboardRemove {
  /** Requests clients to remove the custom keyboard (user will not be able to summon this keyboard; if you want to hide the keyboard from sight but keep it accessible, use one_time_keyboard in ReplyKeyboardMarkup) */
  remove_keyboard: true;
  /** Use this parameter if you want to remove the keyboard for specific users only. Targets: 1) users that are @mentioned in the text of the Message object; 2) if the bot message is a reply (has reply_to_message_id), sender of the original message. Example: A user votes in a poll, bot returns confirmation message in reply to the vote and removes the keyboard for that user, while still showing the keyboard with poll options to users who haven't voted yet. */
  selective?: boolean;
}

interface ForceReply {
  /** Shows reply interface to the user, as if they manually selected the bot message and tapped 'Reply' */
  force_reply: true;
  /** The placeholder to be shown in the input field when the reply is active; 1-64 characters */
  input_field_placeholder?: string;
  /** Use this parameter if you want to force reply from specific users only. Targets: 1) users that are @mentioned in the text of the Message object; 2) if the bot message is a reply (has reply_to_message_id), sender of the original message. */
  selective?: boolean;
}

interface WebhookInfo {
  /** Webhook URL, may be empty if webhook is not set up */
  url: string;
  /** True, if a custom certificate was provided for webhook certificate checks */
  has_custom_certificate: boolean;
  /** Number of updates awaiting delivery */
  pending_update_count: number;
  /** Currently used webhook IP address */
  ip_address?: string;
  /** Unix time for the most recent error that happened when trying to deliver an update via webhook */
  last_error_date?: number;
  /** Error message in human-readable format for the most recent error that happened when trying to deliver an update via webhook */
  last_error_message?: string;
  /** Unix time of the most recent error that happened when trying to synchronize available updates with Telegram datacenters */
  last_synchronization_error_date?: number;
  /** The maximum allowed number of simultaneous HTTPS connections to the webhook for update delivery */
  max_connections?: number;
  /** A list of update types the bot is subscribed to. Defaults to all update types except chat_member */
  allowed_updates?: string[];
}

interface Update {
  /** The update's unique identifier. Update identifiers start from a certain positive number and increase sequentially. This ID becomes especially handy if you're using webhooks, since it allows you to ignore repeated updates or to restore the correct update sequence, should they get out of order. If there are no new updates for at least a week, then identifier of the next update will be chosen randomly instead of sequentially. */
  update_id: number;
  /** New incoming message of any kind - text, photo, sticker, etc. */
  message?: Message;
  /** New version of a message that is known to the bot and was edited */
  edited_message?: Message;
  /** New incoming channel post of any kind - text, photo, sticker, etc. */
  channel_post?: Message;
  /** New version of a channel post that is known to the bot and was edited */
  edited_channel_post?: Message;
  /** New incoming inline query */
  inline_query?: InlineQuery;
  /** The result of an inline query that was chosen by a user and sent to their chat partner. Please see our documentation on the feedback collecting for details on how to enable these updates for your bot. */
  chosen_inline_result?: ChosenInlineResult;
  /** New incoming callback query */
  callback_query?: CallbackQuery;
  /** New incoming shipping query. Only for invoices with flexible price */
  shipping_query?: ShippingQuery;
  /** New incoming pre-checkout query. Contains full information about checkout */
  pre_checkout_query?: PreCheckoutQuery;
  /** New poll state. Bots receive only updates about stopped polls and polls, which are sent by the bot */
  poll?: Poll;
  /** A user changed their answer in a non-anonymous poll. Bots receive new votes only in polls that were sent by the bot itself. */
  poll_answer?: PollAnswer;
  /** The bot chat member status was updated in a chat. For private chats, this update is received only when the bot is blocked or unblocked by the user. */
  my_chat_member?: ChatMemberUpdated;
  /** A chat member's status was updated in a chat. The bot must be an administrator in the chat and must explicitly specify “chat_member” in the list of allowed_updates to receive these updates. */
  chat_member?: ChatMemberUpdated;
  /** A request to join the chat has been sent. The bot must have the can_invite_users administrator right in the chat to receive these updates. */
  chat_join_request?: ChatJoinRequest;
}

interface CallbackQuery {
  /** Unique identifier for this query */
  id: string;
  /** Sender */
  from: User;
  /** Message with the callback button that originated the query. Note that message content and message date will not be available if the message is too old */
  message?: Message;
  /** Identifier of the message sent via the bot in inline mode, that originated the query. */
  inline_message_id?: string;
  /** Global identifier, uniquely corresponding to the chat to which the message with the callback button was sent. Useful for high scores in games. */
  chat_instance: string;
  /** Data associated with the callback button. Be aware that the message originated the query can contain no callback buttons with this data. */
  data?: string;
  /** Short name of a Game to be returned, serves as the unique identifier for the game */
  game_short_name?: string;
}

type InputFile = never;

interface File {
  /** Identifier for this file, which can be used to download or reuse the file */
  file_id: string;
  /** Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
  file_unique_id: string;
  /** File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value. */
  file_size?: number;
  /** File path. Use https://api.telegram.org/file/bot<token>/<file_path> to get the file. */
  file_path?: string;
}

interface BotCommand {
  /** Text of the command; 1-32 characters. Can contain only lowercase English letters, digits and underscores. */
  command: string;
  /** Description of the command; 1-256 characters. */
  description: string;
}

type BotCommandScope =
  | BotCommandScopeDefault
  | BotCommandScopeAllPrivateChats
  | BotCommandScopeAllGroupChats
  | BotCommandScopeAllChatAdministrators
  | BotCommandScopeChat
  | BotCommandScopeChatAdministrators
  | BotCommandScopeChatMember;

interface BotCommandScopeDefault {
  /** Scope type, must be default */
  type: 'default';
}

interface BotCommandScopeAllPrivateChats {
  /** Scope type, must be all_private_chats */
  type: 'all_private_chats';
}

interface BotCommandScopeAllGroupChats {
  /** Scope type, must be all_group_chats */
  type: 'all_group_chats';
}

interface BotCommandScopeAllChatAdministrators {
  /** Scope type, must be all_chat_administrators */
  type: 'all_chat_administrators';
}

interface BotCommandScopeChat {
  /** Scope type, must be chat */
  type: 'chat';
  /** Unique identifier for the target chat or username of the target supergroup (in the format @username) */
  chat_id: number | string;
}

interface BotCommandScopeChatAdministrators {
  /** Scope type, must be chat_administrators */
  type: 'chat_administrators';
  /** Unique identifier for the target chat or username of the target supergroup (in the format @username) */
  chat_id: number | string;
}

interface BotCommandScopeChatMember {
  /** Scope type, must be chat_member */
  type: 'chat_member';
  /** Unique identifier for the target chat or username of the target supergroup (in the format @username) */
  chat_id: number | string;
  /** Unique identifier of the target user */
  user_id: number;
}

interface Animation {
  /** Identifier for this file, which can be used to download or reuse the file */
  file_id: string;
  /** Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
  file_unique_id: string;
  /** Video width as defined by sender */
  width: number;
  /** Video height as defined by sender */
  height: number;
  /** Duration of the video in seconds as defined by sender */
  duration: number;
  /** Animation thumbnail as defined by sender */
  thumbnail?: PhotoSize;
  /** Original animation filename as defined by sender */
  file_name?: string;
  /** MIME type of the file as defined by sender */
  mime_type?: string;
  /** File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value. */
  file_size?: number;
}

interface Audio {
  /** Identifier for this file, which can be used to download or reuse the file */
  file_id: string;
  /** Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
  file_unique_id: string;
  /** Duration of the audio in seconds as defined by sender */
  duration: number;
  /** Performer of the audio as defined by sender or by audio tags */
  performer?: string;
  /** Title of the audio as defined by sender or by audio tags */
  title?: string;
  /** Original filename as defined by sender */
  file_name?: string;
  /** MIME type of the file as defined by sender */
  mime_type?: string;
  /** File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value. */
  file_size?: number;
  /** Thumbnail of the album cover to which the music file belongs */
  thumbnail?: PhotoSize;
}

interface Document {
  /** Identifier for this file, which can be used to download or reuse the file */
  file_id: string;
  /** Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
  file_unique_id: string;
  /** Document thumbnail as defined by sender */
  thumbnail?: PhotoSize;
  /** Original filename as defined by sender */
  file_name?: string;
  /** MIME type of the file as defined by sender */
  mime_type?: string;
  /** File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value. */
  file_size?: number;
}

interface Sticker {
  /** Identifier for this file, which can be used to download or reuse the file */
  file_id: string;
  /** Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
  file_unique_id: string;
  /** Type of the sticker, currently one of “regular”, “mask”, “custom_emoji”. The type of the sticker is independent of its format, which is determined by the fields is_animated and is_video. */
  type: string;
  /** Sticker width */
  width: number;
  /** Sticker height */
  height: number;
  /** True, if the sticker is animated */
  is_animated: boolean;
  /** True, if the sticker is a video sticker */
  is_video: boolean;
  /** Sticker thumbnail in the .WEBP or .JPG format */
  thumbnail?: PhotoSize;
  /** Emoji associated with the sticker */
  emoji?: string;
  /** Name of the sticker set to which the sticker belongs */
  set_name?: string;
  /** For premium regular stickers, premium animation for the sticker */
  premium_animation?: File;
  /** For mask stickers, the position where the mask should be placed */
  mask_position?: MaskPosition;
  /** For custom emoji stickers, unique identifier of the custom emoji */
  custom_emoji_id?: string;
  /** True, if the sticker must be repainted to a text color in messages, the color of the Telegram Premium badge in emoji status, white color on chat photos, or another appropriate color in other places */
  needs_repainting?: boolean;
  /** File size in bytes */
  file_size?: number;
}

interface MaskPosition {
  /** The part of the face relative to which the mask should be placed. One of “forehead”, “eyes”, “mouth”, or “chin”. */
  point: string;
  /** Float number. Shift by X-axis measured in widths of the mask scaled to the face size, from left to right. For example, choosing -1.0 will place mask just to the left of the default mask position. */
  x_shift: number;
  /** Float number. Shift by Y-axis measured in heights of the mask scaled to the face size, from top to bottom. For example, 1.0 will place the mask just below the default mask position. */
  y_shift: number;
  /** Float number. Mask scaling coefficient. For example, 2.0 means double size. */
  scale: number;
}

interface ShippingQuery {
  /** Unique query identifier */
  id: string;
  /** User who sent the query */
  from: User;
  /** Bot specified invoice payload */
  invoice_payload: string;
  /** User specified shipping address */
  shipping_address: ShippingAddress;
}

interface ShippingAddress {
  /** Two-letter ISO 3166-1 alpha-2 country code */
  country_code: string;
  /** State, if applicable */
  state: string;
  /** City */
  city: string;
  /** First line for the address */
  street_line1: string;
  /** Second line for the address */
  street_line2: string;
  /** Address post code */
  post_code: string;
}

interface PreCheckoutQuery {
  /** Unique query identifier */
  id: string;
  /** User who sent the query */
  from: User;
  /** Three-letter ISO 4217 currency code */
  currency: string;
  /** Total price in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). */
  total_amount: number;
  /** Bot specified invoice payload */
  invoice_payload: string;
  /** Identifier of the shipping option chosen by the user */
  shipping_option_id?: string;
  /** Order information provided by the user */
  order_info?: OrderInfo;
}

interface OrderInfo {
  /** User name */
  name?: string;
  /** User's phone number */
  phone_number?: string;
  /** User email */
  email?: string;
  /** User shipping address */
  shipping_address?: ShippingAddress;
}

interface Video {
  /** Identifier for this file, which can be used to download or reuse the file */
  file_id: string;
  /** Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
  file_unique_id: string;
  /** Video width as defined by sender */
  width: number;
  /** Video height as defined by sender */
  height: number;
  /** Duration of the video in seconds as defined by sender */
  duration: number;
  /** Video thumbnail */
  thumbnail?: PhotoSize;
  /** Original filename as defined by sender */
  file_name?: string;
  /** MIME type of the file as defined by sender */
  mime_type?: string;
  /** File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value. */
  file_size?: number;
}

interface VideoNote {
  /** Identifier for this file, which can be used to download or reuse the file */
  file_id: string;
  /** Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
  file_unique_id: string;
  /** Video width and height (diameter of the video message) as defined by sender */
  length: number;
  /** Duration of the video in seconds as defined by sender */
  duration: number;
  /** Video thumbnail */
  thumbnail?: PhotoSize;
  /** File size in bytes */
  file_size?: number;
}

interface Voice {
  /** Identifier for this file, which can be used to download or reuse the file */
  file_id: string;
  /** Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. */
  file_unique_id: string;
  /** Duration of the audio in seconds as defined by sender */
  duration: number;
  /** MIME type of the file as defined by sender */
  mime_type?: string;
  /** File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value. */
  file_size?: number;
}

interface Contact {
  /** Contact's phone number */
  phone_number: string;
  /** Contact's first name */
  first_name: string;
  /** Contact's last name */
  last_name?: string;
  /** Contact's user identifier in Telegram. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier. */
  user_id?: number;
  /** Additional data about the contact in the form of a vCard */
  vcard?: string;
}

interface Dice {
  /** Emoji on which the dice throw animation is based */
  emoji: string;
  /** Value of the dice, 1-6 for “🎲”, “🎯” and “🎳” base emoji, 1-5 for “🏀” and “⚽” base emoji, 1-64 for “🎰” base emoji */
  value: number;
}

interface Game {
  /** Title of the game */
  title: string;
  /** Description of the game */
  description: string;
  /** Photo that will be displayed in the game message in chats. */
  photo: PhotoSize[];
  /** Brief description of the game or high scores included in the game message. Can be automatically edited to include current high scores for the game when the bot calls setGameScore, or manually edited using editMessageText. 0-4096 characters. */
  text?: string;
  /** Special entities that appear in text, such as usernames, URLs, bot commands, etc. */
  text_entities?: MessageEntity[];
  /** Animation that will be displayed in the game message in chats. Upload via BotFather */
  animation?: Animation;
}

interface WebAppInfo {
  /** An HTTPS URL of a Web App to be opened with additional data as specified in Initializing Web Apps */
  url: string;
}

interface WebAppData {
  /** The data. Be aware that a bad client can send arbitrary data in this field. */
  data: string;
  /** Text of the web_app keyboard button from which the Web App was opened. Be aware that a bad client can send arbitrary data in this field. */
  button_text: string;
}

interface CallbackGame {
  /** A placeholder, currently holds no information. Use BotFather to set up your game. */
  data: unknown;
}

interface LoginUrl {
  /** An HTTPS URL to be opened with user authorization data added to the query string when the button is pressed. If the user refuses to provide authorization data, the original URL without information about the user will be opened. The data added is the same as described in Receiving authorization data. */
  url: string;
  /** New text of the button in forwarded messages. */
  forward_text?: string;
  /** Username of a bot, which will be used for user authorization. See Setting up a bot for more details. If not specified, the current bot username will be assumed. The url domain must be the same as the domain linked with the bot. See Linking your domain to the bot for more details. */
  bot_username?: string;
  /** Pass True to request the permission for your bot to send messages to the user. */
  request_write_access?: boolean;
}

interface SwitchInlineQueryChosenChat {
  /** The default inline query to be inserted in the input field. If left empty, only the bot username will be inserted */
  query?: string;
  /** True, if private chats with users can be chosen */
  allow_user_chats?: boolean;
  /** True, if private chats with bots can be chosen */
  allow_bot_chats?: boolean;
  /** True, if group and supergroup chats can be chosen */
  allow_group_chats?: boolean;
  /** True, if channel chats can be chosen */
  allow_channel_chats?: boolean;
}

interface Invoice {
  /** Product name */
  title: string;
  /** Product description */
  description: string;
  /** Unique bot deep-linking parameter that can be used to generate this invoice */
  start_parameter: string;
  /** Three-letter ISO 4217 currency code */
  currency: string;
  /** Total price in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). */
  total_amount: number;
}

interface SuccessfulPayment {
  /** Three-letter ISO 4217 currency code */
  currency: string;
  /** Total price in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). */
  total_amount: number;
  /** Bot specified invoice payload */
  invoice_payload: string;
  /** Identifier of the shipping option chosen by the user */
  shipping_option_id?: string;
  /** Order information provided by the user */
  order_info?: OrderInfo;
  /** Telegram payment identifier */
  telegram_payment_charge_id: string;
  /** Provider payment identifier */
  provider_payment_charge_id: string;
}

interface WriteAccessAllowed {
  /** Name of the Web App which was launched from a link */
  web_app_name?: string;
}

interface PassportData {
  /** Array with information about documents and other Telegram Passport elements that was shared with the bot */
  data: string[]; // todo
  /** Encrypted credentials required to decrypt the data */
  credentials: string; // todo
}

interface ProximityAlertTriggered {
  /** User that triggered the alert */
  traveler: User;
  /** User that set the alert */
  watcher: User;
  /** The distance between the users */
  distance: number;
}

interface ForumTopicCreated {
  /** Name of the topic */
  name: string;
  /** Color of the topic icon in RGB format */
  icon_color: number;
  /** Unique identifier of the custom emoji shown as the topic icon */
  icon_custom_emoji_id?: string;
}

interface ForumTopicEdited {
  /** New name of the topic, if it was edited */
  name?: string;
  /** New identifier of the custom emoji shown as the topic icon, if it was edited; an empty string if the icon was removed */
  icon_custom_emoji_id?: string;
}

interface ForumTopicClosed {
  /** This object represents a service message about a forum topic closed in the chat. Current holds no information. */
  data?: unknown;
}

interface ForumTopicReopened {
  /** This object represents a service message about a forum topic reopened in the chat. Current holds no information. */
  data?: unknown;
}

interface GeneralForumTopicHidden {
  /** This object represents a service message about General forum topic hidden in the chat. Current holds no information. */
  data?: unknown;
}

interface GeneralForumTopicUnhidden {
  /** This object represents a service message about General forum topic unhidden in the chat. Current holds no information. */
  data?: unknown;
}

interface VideoChatScheduled {
  /** Point in time (Unix timestamp) when the video chat is supposed to be started by a chat administrator */
  start_date: number;
}

interface VideoChatStarted {
  /** This object represents a service message about a video chat started in the chat. Current holds no information. */
  data?: unknown;
}

interface VideoChatEnded {
  /** Video chat duration in seconds */
  duration: number;
}

interface VideoChatParticipantsInvited {
  /** New members that were invited to the video chat */
  users: User[];
}
