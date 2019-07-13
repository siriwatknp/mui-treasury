/* eslint-disable */
import React, { useState } from 'react';
import Box from 'components/atoms/Box';
import PeaFullProfile from '../lib/PeaFullProfile';
import { peapodCardProps } from './_mock';
import PeaButton from '../lib/PeaButton';

const FullProfile = () => {
  const [invited, setInvited] = useState(false);
  const [followed, setFollowed] = useState(false);
  const [following, setFollowing] = useState(48);
  const [blockedMe, setBlockedMe] = useState(false);
  const [blocked, setBlocked] = useState(false);

  const inviteHandler = pod => {
    setInvited(true);
  };

  const followHandler = () => {
    setFollowed(true);
    setFollowing(following + 1);
  };

  const blockHandler = () => {
    setBlocked(!blocked);
  };

  const reportHandler = () => {
    alert('You reported this profile');
  };

  return (
    <Box flex={1} {...Box.alignCenter} justifyContent={'space-evenly'} flexDirection={'column'}>
      <PeaButton
        variant={'contained'}
        color={'primary'}
        size={'small'}
        fullwidth
        onClick={() => setBlockedMe(!blockedMe)}
      >
        Block/Unblock you (For test)
      </PeaButton>
      <br />
      <PeaFullProfile
        cover={
          'https://beinglol.com/media/facebook-cover/Iron-Man-3-Facebook-Covers-1598.jpeg'
        }
        image={
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZYEi7-MP_fJqbD6yYkrykoIOo-65rj95h2lyI2dPQ8sDtgj9cpA'
        }
        name={'Iron Mann'}
        tag={'@ironmann'}
        site={'https://marvelcinematicuniverse.fandom.com/wiki/Iron_Man'}
        bio={
          'Anthony Edward "Tony" Stark was a billionaire industrialist, a founding member of the Avengers, and the former CEO of Stark Industries, a company originally started by his father, Howard Stark.'
        }
        location={'California'}
        age={35}
        gender={'Male'}
        groups={[
          {
            name: 'Celebrities',
            src:
              'https://images.livemint.com/rf/Image-621x414/LiveMint/Period1/2015/01/10/Photos/selfie-kH4D--621x414@LiveMint.jpg',
          },
          {
            name: 'Friends',
            src:
              'https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/06/09/11/group-photos-need-to-die.jpg?w968h681',
          },
        ]}
        tags={[
          { label: 'cinema' },
          { label: 'sport' },
          { label: 'nightlife' },
          { label: 'theater' },
          { label: 'culture' },
          { label: 'holy' },
        ]}
        pods={[peapodCardProps]}
        reputation={500}
        following={following}
        followers={5}
        invited={invited}
        followed={followed}
        blockedMe={blockedMe}
        blocked={blocked}
        onInvite={inviteHandler}
        onFollow={followHandler}
        onBlock={blockHandler}
        onReport={reportHandler}
      />
    </Box>
  );
};

FullProfile.metadata = {
  name: 'Pea FullProfile',
};
FullProfile.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';
FullProfile.code = `
  import React, { useState } from 'react';
  import Box from 'components/atoms/Box';
  import PeaFullProfile from '../lib/PeaFullProfile';
  import { peapodCardProps } from './_mock';
  import PeaButton from '../lib/PeaButton';

  const FullProfile = () => {
    const [invited, setInvited] = useState(false);
    const [followed, setFollowed] = useState(false);
    const [following, setFollowing] = useState(48);
    const [blockedMe, setBlockedMe] = useState(false);
    const [blocked, setBlocked] = useState(false);

    const inviteHandler = pod => {
      setInvited(true);
    };

    const followHandler = () => {
      setFollowed(true);
      setFollowing(following + 1);
    };

    const blockHandler = () => {
      setBlocked(!blocked);
    };

    const reportHandler = () => {
      alert('You reported this profile');
    };

    return (
      <Box flex={1} {...Box.alignCenter} justifyContent={'space-evenly'} flexDirection={'column'}>
        <PeaButton
          variant={'contained'}
          color={'primary'}
          size={'small'}
          fullwidth
          onClick={() => setBlockedMe(!blockedMe)}
        >
          Block/Unblock you (For test)
        </PeaButton>
        <br />
        <PeaFullProfile
          cover={
            'https://beinglol.com/media/facebook-cover/Iron-Man-3-Facebook-Covers-1598.jpeg'
          }
          image={
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZYEi7-MP_fJqbD6yYkrykoIOo-65rj95h2lyI2dPQ8sDtgj9cpA'
          }
          name={'Iron Mann'}
          tag={'@ironmann'}
          site={'https://marvelcinematicuniverse.fandom.com/wiki/Iron_Man'}
          bio={
            'Anthony Edward "Tony" Stark was a billionaire industrialist, a founding member of the Avengers, and the former CEO of Stark Industries, a company originally started by his father, Howard Stark.'
          }
          location={'California'}
          age={35}
          gender={'Male'}
          groups={[
            {
              name: 'Celebrities',
              src:
                'https://images.livemint.com/rf/Image-621x414/LiveMint/Period1/2015/01/10/Photos/selfie-kH4D--621x414@LiveMint.jpg',
            },
            {
              name: 'Friends',
              src:
                'https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/06/09/11/group-photos-need-to-die.jpg?w968h681',
            },
          ]}
          tags={[
            { label: 'cinema' },
            { label: 'sport' },
            { label: 'nightlife' },
            { label: 'theater' },
            { label: 'culture' },
            { label: 'holy' },
          ]}
          pods={[peapodCardProps]}
          reputation={500}
          following={following}
          followers={5}
          invited={invited}
          followed={followed}
          blockedMe={blockedMe}
          blocked={blocked}
          onInvite={inviteHandler}
          onFollow={followHandler}
          onBlock={blockHandler}
          onReport={reportHandler}
        />
      </Box>
    );
  };
`;

export default FullProfile;
