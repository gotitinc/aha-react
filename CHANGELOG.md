## Release 1.12.11 - November 27, 2020
### Updated
* Logo: added GotIt AI logo
### Fixed
* TopMenu: removed default vertical padding
* HeaderMobile: fixed toggle button
* CSSUtilities: fixed `backgroundLinkedin`
* CSS: fixed `a` tag
* Docs: fixed link css import from design.got-it.io

## Release 1.12.10 - Octorber 30, 2020
### Updated
* CSSUtilities: added `u-userSelect*`, `u-textPlaceholder`
* EmptyState: added name `inbox`
* Composer: added tooltipSendButton
### Fixed
* SCSS: The `a` tag: prevent default with `Button` using `a` tag
* Slider: fixed border color
* Build script: fixed, synced version scss with js

## Release 1.12.9 - Octorber 15, 2020
### Updated
* Logo: - added logo Expert for Microsoft, Expert for EDU
* Carousel: Replaced slick-carousel(jQuery) -> react-slick
* CSS Utilities:
  * added u-textLink
  * added screen reader css
* SCSS: added variant `Sfvn`
* Docs:
  * ENV for docs
  * added a button for switch between branding
* Build:
  * refactor build css use webpack

### Fixed
* Breadcrumb, TopMenu: change u-textPrimary to u-textLink
* Calendar: import entry.nostyle.js instead of entry.js
* CSS Utilities: removed unuse deprecated u-text**
* SCSS:
  * modified variables
  * moved SCSS to root
  * _calendar.scss: import react-calendar related css files

## Release 1.12.8 - Septemper 29, 2020
### Updated
* Docs:
  * Removed storybook document version
  * Removed package-lock.json
  * Updated npm.buildspec.yml
* Utilities: ObjectFit, Spacing, Filter, BackgroundFilter, Fill, Stroke
* Avatar, Icon: added more sizes
* SidebarMenu: updated styling
* BubbleChat: added variant `transparentDark`, `transparentLight`
* SCSS: moved meta info to base/_info.scss

### Fixed
* Button: fixed variant `link`, `secondary`
* Form.Select: fixed arrow
* Utilities: fixed background webkitScrollbar
* Docs:
  * Fixed .travis.yml

## Release 1.12.7 - Septemper 1, 2020
### Updated
* Docs:
  * Platform: Switched from using `Storybook` to `Gatsby`
  * Button: added Google and Microsoft buttons
* Progress: added new animation effect
* Utilities: added new color CSS classes
* Avatar: added prop: `text`
* Button, Input, Calendar, Select, Check: can change the font size to medium or large by using text size classes.
* BubbleChat:  added props: `textClassName`, `actionBar`, `actionBarClassName` and `onClickText`; added variant: `dark`
* ChatList: added prop: `innerClassName`
* FormInput: added prop: `isBackgroundReset` to reset the background to transparent, and prop: `isBorderNone` to remove all borders for all states

### Fixed
* Docs:
  * Calendar: fixed typo

## Release 1.12.6 - August 6, 2020
### Updated
* Icon : added `save`
* Tabs: added prop `visual`
* BubbleChat: added variant `primaryLight`
* Utilities:
  * Updated docs: Display, Opacity,
  * added `u-textNearlyLight`,`u-textTruncate-4`,`u-textTruncate-5`

### Fixed
* TagInput: fixed style
* Calendar: fixed className
* DatePicker: added prop `version`
* Pagination: fixed `PageItem`

## Release 1.12.5 - June 30, 2020
### Updated
* Icon: cursor, eraser, font, edit, editOff, screenOff
* Form.Check: added type checkbox_button
* BubbleChat: changed Proptype time
### Fixed
* TimePicker: css
* Storybook: Modal

## Release 1.12.4 - May 29, 2020
### Updated
* Toast
* Utilities: ObjectFit, LeterSpacing, Float, Transform, Transition

## Release 1.12.3 - May 25, 2020
### Updated
* Utilities: Width, Height

## Release 1.12.2 - May 16, 2020
### Updated
* BubbleChat: added prop `variant`
* Storybook: Docs updated
 * Styles: Illustration, Colors
 * Utilities: Borders, Cursors, Opacity, Shadows, Animations, Colors

## Release 1.12.1 - May 08, 2020
### Updated
* Storybook: updated Docs
  * Grid
  * Flexbox
  * Table
  * Header
  * SplitPane
  * Illustration Style Guidelines
  * ListStyle
  * Utilities: Position

## Release 1.12.0 - April 24, 2020
### Updated
* Form.Select
* Form.Feedback: added prop `visible`
* TagInput: added prop `size`
* Card: added prop `size`
* Tooltip : added variant `white`
* Composer: added send button, prop `sendButtonActive`, `sendButtonProps`
* Storybook: updated Docs
  * TopBanner
  * TopMenu
  * MultiSteps
  * SidebarMenu
  * Composer
  * ProblemInfo
  * Utilities: Text, Position, Display
### Fixed
* TimePicker: css
* Modal: added padding for `extraLarge` size

## Release 1.11.4 - April 14, 2020
### Updated
* Icon: add `airplane`, `camera`, `mail`, `fastForward`, `trash`, `rotate`, `apps`, `options`, `gitBranch`
* Overlay: added prop `hoverOverlay`
* SidebarMenu: updated `SidebarMenu.Item` `SidebarMenu.SubMenu` add prop `size`
* BubbleChat: allowed avatar in inbound, add `BubbleChat.Image`
* Tooltip: added prop `noArrow`
* Calender: added `TimePicker`, add prop `size`, `clearIcon`
* Badge, Tag: added variant `information`,`information_subtle`
* Separator: added variant `lighter`
* Toggle: revamped
* Counter: added prop `variant`
* Composer: added prop `attachButtonProps`
* SCSS : added variant Study
* CSS Utilities:
  * added `u-backgroundFacebook`, `u-backgroundTwitter`, `u-backgroundYoutube`, `u-backgroundLinkedin`, `u-backgroundGoogle`, `u-backgroundVimeo`,`u-textFacebook`, `u-textTwitter`, `u-textYoutube`, `u-textLinkedin`, `u-textGoogle`, `u-textVimeo`
  * remove `u-borderLighter` and set it to default

## Release 1.11.3 - March 21, 2020
### Updated
* Icon: updated `unlock`; added `map`, `camera`

## Release 1.11.2 - March 20, 2020
### Updated
* Icon: added new icon `cloudUpload`, `location`, `send`, `share`, `unlock`, `volumeHigh`, `volumeOff`, `zoomIn`, `zoomOut`, `expand`, `minus`, `plus`


## Release 1.11.1 - March 16, 2020
### Updated
* BubbleChat: modified prop type

## Release 1.11.0 - March 13, 2020
### Updated
* Storybook: updated Docs
  * Tab
  * TagInput
  * Progress
  * ProblemInfo
  * Rating
  * SessionType
  * SearchBox
  * BlockLayout

## Release 1.10.0 - February 28, 2020
### Updated
* Storybook: updated Docs
  * FormGroup
  * Overlay
  * EmptyState
  * FileAttachment
  * Message
  * Modal
  * Slider
  * Pagination
* Card: changed default margin bottom to 16px , removed class `u-overflowHidden`.
* Icon: added new icon `helpCircleOutline`, `helpCircle`
* Progress: added new variant `negative`, `accent`, `warning`

### Fixed
* SidebarMenu: missing bottom line per SidebarMenu.Item


## Release 1.9.0 - February 14, 2020 (Valentine)
### Updated
* Storybook: updated Docs
  * Accordion
  * Breadcrumb
  * Bubble Chat
  * Buttons Group
  * Carousel
  * Counter
  * Composer
  * Dropdown
  * Empty states
* Card
* Block Layout
* Page Layout

## Release 1.8.2 - February 13, 2020
### Updated
* Icon: added 'column','data', 'table', 'cart', 'store', 'workflow', 'bill', 'bag'
* SidebarMenu: added prop 'size'
### Fixed
* SidebarMenu: missing className prop


## Release 1.8.1 - January 29, 2020
### Updated
* Logo: QuerychatAI


## Release 1.8.0 - January 22, 2020
### Added
* Accordion
* Collapse
* Slider
* Utilities List Style Underline
* Storybook: Refactored docs and componentAPI


## Release 1.7.0 - January 10, 2020
### Added
* Skeleton
* Calendar
* Storybook: New structor
### Updated
* Sync UI && Code
* Storybook: example Tabs
* Storybook: color name
* Remove ThemeProvide
* Icon: mic, calendar
### Fixed
* NPM: files
* eslint

## Release 1.6.3 January 07, 2020
### Fixed
* NPM: files

## Release 1.6.2 December 31, 2019
### Fixed
* State disabled Button

## Release 1.6.1 December 30, 2019
### Fixed
* NPM: dependencies

## Release 1.6.0 December 13, 2019
### Added
* Separator
* Composer
* BubbleChat
* SessionType
* ChatBox
* Counter
* ProblemInfo
* Example Header

### Updated
* Layout: Table
* Button
* FileAttachment


## Release 1.5.2 December 09, 2019
### Fixed
* State disabled

## Release 1.5.1 December 03, 2019
### Fixed
* Storybook: carousel

## Release 1.5.0 November 29, 2019
### Added
* TopMenu
* Layout: Header
* EmptyState
* TagInput
* Loaders

## Release 1.4.3 November 25, 2019
### Fixed
* Spelling
* Storybook: component sort

## Release 1.4.2 November 25, 2019
* ... NPM Error

## Release 1.4.1 November 22, 2019
* ... NPM Error

## Release 1.4.0 November 22, 2019
### Added
* Dropdown
* Sidebar
* Tabs

### Fixed
* Message
* FormFile: missing state feedback
* Utilities: Radius
* Utilities: fix responsive class

### Updated
* Layout: `Table--bordered`
* Tags: `Tag-close`
* Icon: `funnel`
* Utilities: `u-screenHeightFull`, `u-screenWidthFull`


## Release 1.3.3 November 13, 2019
### Fixed
* Storybook:  FormGroup + Media + ListStyle + Spacing + Transform
* Issues  elementType = a with component Bagde, Button, Tag, Toggle
* Wrong prop width=auto of component Button on Pagination
* Remove unused class of component Carousel
* Missing prop name=playCircle

## Release 1.3.2 November 13, 2019
### Updated
* Avatar: Removed user presence

## Release 1.3.1 November 13, 2019
### Updated
* Avatar: User presence
* Utilities: Background
* Storybook: style for `@storybook/addon-info`

### Fixed
* AskBox: Fixed text-area's width
* File Attachment: background-colour

## Release 1.3.0 November 08, 2019
### Added
* AskBox
* Tooltip
* MutilSteps
* Overlays
* Carousel
* File Attachment

### Updated
* Icons:
  * Removed: attachCsv
  * Updated: attachTxt
  * Addd: attachPpt, attachSql, attachCode, playCircle, attachSheet
* Grid:
  * Changed the default Gutter from 24px to 32px
  * Colors: Added more text and background colors
* Form.Input:
  * resized
* Pagination:
  * CSS

### Fixed
* Storybook: All the component structure preview images to 2x
* Storybook:

## Release 1.2.3 November 06, 2019
### Fixed
* Missing padding when using responsive gird class (Ex: lg:u-size1of2)

## Release 1.2.2 November 01, 2019
### Added
* Merge UI-Core from `design_ui_core@master`

## Release 1.2.1 October 25, 2019
### Updated
* CSS Naming for state and responsive (Ex: hover:u-textPrimary, md:u-size1of12)

## Release 1.2.0 October 25, 2019
### Added
* Breadcrumb
* Media
* Message
* Modal
* Pagination
* Progress
* Ratting
* Top Banner

### Updated
* Logo
* Storybook: PropTabel

## Release 1.1.2 October 15, 2019
### Fixed
* Storybook: renamed From -> Form
* Storybook: changed stories border, spacing utilities

## Release 1.1.1 October 10, 2019
### Fixed
* Storybook: Synchronized the footnote style
* Storybook: Moved Note sections to under descriptions, not the bottom of the site
* Storybook: Replaced current Photo Avatar by human images
* Storybook: Loading new version, Logo link

### Added
* Buttons
* Button group
* Input
* Input group
* File input
* Checkbox
* Radio button
* Toggles
* Updated document for Badges and Tags

## Release 1.0.0 September 27, 2019
### Added
* Code-CSS: Utilities
* Icons
* Avatars
* Logos
* Badges
* Tags
