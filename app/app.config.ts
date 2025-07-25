export default defineAppConfig({
  ui: {
    input: {
      slots: {
        root: 'flex',
        base: [
          'focus:text-amber-300 text-gray-700'
        ],
      }
    },
    formField: {
      slots: {
        root: 'grid grid-cols-4',
        wrapper: 'flex wrapper',
        container: 'col-span-3 relative',
        labelWrapper: 'block',
      }
    },
    textarea: {
      slots: {
        root: 'block border border-transparent rounded-md shadow-sm py-1 px-0 ',
        base: [
          'focus:text-amber-300 text-gray-700'
        ],
      }
    },
    button: {
      slots: {
        base: [
          'rounded-md font-medium flex items-center disabled:cursor-not-allowed aria-disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:opacity-75',
          'transition-colors'
        ],
      }
    }
  }
})