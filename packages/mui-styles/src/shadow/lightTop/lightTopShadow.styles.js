export default {
  root: ({ inactive }) => ({
    boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
    transition: '0.3s',
    ...(!inactive && {
      '&:hover': {
        boxShadow: '0 16px 70px -12.125px rgba(0,0,0,0.3)',
      },
    }),
  }),
};
