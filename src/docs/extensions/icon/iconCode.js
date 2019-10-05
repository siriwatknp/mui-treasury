const iconWithTypography = `
  import Typography from 'path/to/Typography';
  import Icon from 'path/to/Icon';
  
  <>
    <Typography gutterBottom variant={'h5'}>
      <Icon icon={'far fa-copy'} size={'large'} /> Text(h5) with
      icon(large).
    </Typography>
    <Typography gutterBottom variant={'h6'}>
      <Icon icon={'far fa-copy'} size={'big'} /> Text(h6) with
      icon(big).
    </Typography>
    <Typography gutterBottom variant={'subtitle1'}>
      <Icon icon={'far fa-copy'} size={'default'} /> Text(subtitle1)
      with icon(default).
    </Typography>
    <Typography gutterBottom>
      <Icon icon={'far fa-copy'} size={'small'} /> Text(body2) with
      icon(small).
    </Typography>
  </>
`;

export default {
  iconWithTypography,
};
