# UI Components

## General
- **Chain Handling**: Default/selected chain handling for explore, currently hardcoded on `DEFAULT_CHAIN_ID`.

## Landing Page
- **Pagination**: Implement pagination on yeeter lists.

## Hooks
- **useYeeters**: Filter by referrer and sort (active, closed, coming soon).
- **useYeeter**: Fetch DAO details, state helpers (status, time left), possibly show fee splits (stretch goal).
- **useYeets**: Fetch latest yeets for ticker.
- **useLatestYeets**: Fetch latest yeets, unscoped to DAO.
- **useMarketMaker**: Identify shaman address, data transform (can execute, Uniswap URL).
- **useMyYeeters**: Toggle query, check if user can exit.
- **Check Exit Eligibility**: Quick check if the user can exit.
- **Latest Rage Quits**: Implement tracking for latest rage quits.

## Transactions
- **Transaction Handling**: Decide on using wagmi or DH.
- **Yeet Transaction**: Reuse from yeeter app.
- **Exit/Rage Quit**: Implement.
- **Execute LP**: Implement logic.

## UI Components

### Disclaimer Modal
- Track user acceptance using local storage.
- Content focused on education.
- Opens on any page visit.

### "What is this?" Modal
- Rework homepage content into simple steps.

### Mine Only Checkbox
- Toggle query/hook data, may reside in parent page.

### Yeet List
- Horizontal scroll/layout.
- Consider using motion for updates.

### Marquee
- Display latest activity.

### Yeet Card
- Layout and data display for states (new, ending soon, coming soon, open, closed).
- Actions: view details, yeet (link or modal), swap (link to pool), exit (link or modal).

### Yeet Detail Display
- Layout and data display for states (fail, upcoming, success, active).

### Yeet Button
- Opens yeet form in modal.
- Migrate components from yeeter app.

### Exit Button
- Handles rage quit transactions.
- Defaults to native tokens and 100%.

### Execute LP
- New execute transaction on market maker.
- Enabled after yeet period and goal reached.

### Swap Button
- External link assembled in useMarketMaker hook.

### Yeets List and Card
- Use `useYeets`, scoped to a yeeter.
- Display messages and addresses of participants.

### Share Button
- Copies URL to clipboard.
- Investigate yeet frames on base.

### Forms in Modals
- Migrate components from yeeter app.
- Consider using a better markdown field from din.
