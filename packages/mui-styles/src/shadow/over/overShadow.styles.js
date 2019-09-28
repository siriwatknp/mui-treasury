export default {
  root: ({ inactive }) => ({
    boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
    transition: '0.3s',
    ...(!inactive && {
      '&:hover': {
        transform: 'translateY(2px)',
        boxShadow: '0 4px 20px 0 rgba(0,0,0,0.12)',
      },
    }),
  }),
};
