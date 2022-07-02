import create from 'zustand'

const useStore = create(set => ({
  bears: 0,
  navBarExpanded: "",
  walletAddress: "",
  
  expandMobileNav: (val) => set(state => ({ navBarExpanded: val })),
  closeMobileNavBar: () => set(state => ({ navBarExpanded: ""  })),
  removeAllBears: () => set({ bears: 0 }),
  setWalletAddress: (val) => set(state => ({ walletAddress: val })),
}))

export default useStore;