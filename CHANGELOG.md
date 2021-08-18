## Release 2.0.3 - Unreleased
### Fixed
* TopMenu: TopMenu-itemAfter of TopMenu-subMenu has wrong position (need CSS changes)
* Toast: Upgrade from `react-toastify@6` to version `7.0.4` to fix issue:
  - `pauseOnFocusLoss` is not applied to windows already unfocused. [Ref](https://github.com/fkhadra/react-toastify/issues/541)

## Release 2.0.2 - January 18, 2021
### Fixed
* Button: modified variant `secondary`, fixed ActionBar
* FileAttachment: modified prop `fileTypeLabel`
* BubbleChat: fixed UI bug, removed console log, map style of `type=system` to `variant=primaryLight`, improve prop `options`
* PaginationItem: removed console log
* Toast: fixed warning
### Added
* Breadcrumb: added prop `noHref`
* Icon: added icon `fileImport`, `fileExport`, `bubbles`
### Updated
* rc-slider, react-slick, react-split-pane, react-toastify to fixed version

## Release 2.0.1 - December 15, 2020
### Fixed
* BubbleChat: pass `avatar` prop value to prop `name` of Avatar, instead of `src`
* Composer: remove defaultProps `tooltipAttachButton` and `tooltipSendButton`
* Button, Tag, Badge: add prop `textClassName` to custom text color

## Release 2.0.0 - December 6, 2020
### Added
* Migrate all from Got It Design System 1.12.11
