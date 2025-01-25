import './eventsList.css';

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
      date: 'Agosto 14, 2024 - Agosto 16, 2024',
      address: 'Bogota, Universidad de los Andes',
    },
  ];
  return (
    <HStack
      className="contain-cards-events"
      display="flex"
      justifyContent="center"
      alignItems="stretch"
      gap={'1.25rem'}
      flexWrap="wrap"
    >
      {eventsList.map((event) => (
        <Card.Root
          className="card-event"
          key={event.tittle}
          display="flex"
          justifyContent="center"
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
            <Text className="tittle-event" fontSize={{ base: '18px', md: '18px' }}>
              {event.tittle}
            </Text>
            <HStack className="contain-date" display="flex" justifyContent="left">
              <Image src={calendar} />
              <Text className="date-text" fontSize={{ base: '14px', md: '14px' }}>
                {event.date}
              </Text>
            </HStack>
            <HStack className="contain-address">
              <Image src={location} />
              <Text className="address-text" fontSize={{ base: '14px', md: '14px' }}>
                {event.address}
              </Text>
            </HStack>
          </VStack>
        </Card.Root>
      ))}
    </HStack>
  );
};
