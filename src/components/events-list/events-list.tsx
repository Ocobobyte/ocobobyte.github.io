import { Card, HStack, Image, Text, VStack } from '@chakra-ui/react';

import calendar from '../../assets/calendar_month.svg';
import imageEvent from '../../assets/imgEvent.jfif';
import location from '../../assets/location_on.svg';

export const EventsList = () => {
  const eventsList = [
    {
      image: imageEvent,
      tittle: 'Public Speaking Practice Online',
      date: 'Abril 14, 2024 - Abril 16, 2024',
      address: 'Ibagué, Universidad del Tolima',
    },
    {
      image: imageEvent,
      tittle: 'Public Speaking Practice Online II',
      date: 'Junio 14, 2024 - Junio 16, 2024',
      address: 'Armenia, Universidad del Quindio',
    },
    {
      image: imageEvent,
      tittle: 'Public Speaking Practice Online III',
      date: 'Julio 14, 2024 - Julio 16, 2024',
      address: 'Medellin, Universidad de Medellin',
    },
    {
      image: imageEvent,
      tittle: 'Public Speaking Practice Online V',
      date: 'Agost 14, 2024 - Agost 16, 2024',
      address: 'Bogota, Universidad de los Andes',
    },
  ];
  return (
    <HStack
      width="100%"
      maxWidth="1210px"
      className="contain-cards-events"
      display="flex"
      justifyContent="center"
      gap={'1.25rem'}
      flexWrap="wrap"
      alignItems="stretch"
    >
      {eventsList.map((event) => (
        <Card.Root
          className="card-event"
          border="none"
          backgroundColor="zircon.100"
          key={event.tittle}
          display="flex"
          alignItems="center"
          width={{ base: '320px', md: '287px' }}
        >
          <Image
            src={event.image}
            alt="event-image"
            width={{ base: '320px', md: '287px' }}
            height={{ base: '179.51px', md: '161px' }}
            borderRadius={{ base: '8.92px', md: '8px' }}
          />
          <VStack
            className="contain-card-event"
            display="flex"
            justifyContent="left"
            alignItems="flex-start"
            padding={'1rem'}
            gap={'1.5rem'}
          >
            <Text fontSize={{ base: '18px', md: '18px' }}>
              {event.tittle}
            </Text>
            <HStack display="flex" justifyContent="left">
              <Image src={calendar} />
              <Text color="#546177" fontSize={{ base: '14px', md: '14px' }}>
                {event.date}
              </Text>
            </HStack>
            <HStack>
              <Image src={location} />
              <Text color="#546177" fontSize={{ base: '14px', md: '14px' }}>
                {event.address}
              </Text>
            </HStack>
          </VStack>
        </Card.Root>
      ))}
    </HStack>
  );
};
