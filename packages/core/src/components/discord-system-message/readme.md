# discord-system-message

<!-- Auto Generated Below -->

## Properties

| Property      | Attribute      | Description                                                                                                                                                                 | Type                                                                                                  | Default      |
| ------------- | -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ------------ |
| `channelName` | `channel-name` | Whether this message is to show channel name changes, used to match Discord's style.                                                                                        | `boolean`                                                                                             | `false`      |
| `timestamp`   | `timestamp`    | The timestamp to use for the message date.                                                                                                                                  | `Date \| null \| string`                                                                              | `new Date()` |
| `type`        | `type`         | The type of system message this is, this will change the icon shown. Valid values: `join`, `leave`, `call`, `missed-call`, `boost`, `edit`, `thread`, `alert`, and `error`. | `"alert" \| "boost" \| "call" \| "edit" \| "error" \| "join" \| "leave" \| "missed-call" \| "thread"` | `'join'`     |

---

_Built with [StencilJS](https://stenciljs.com/)_
