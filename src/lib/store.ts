import type { CandyMachineAccount, UserState } from "src/models";
import { writable } from "svelte/store";

export const candyMachineState = writable<CandyMachineAccount>();
export const userState = writable<UserState>({
  walletPublicKey: "9usSKpVhb4PXthq5RuLc87JvFaCTobiMTNsCqWVwcPz1",
  userBalance: 0,
  isWhiteListed: false,
  solanaExplorerLink: "https://solscan.io/token/9usSKpVhb4PXthq5RuLc87JvFaCTobiMTNsCqWVwcPz1",
});
