import { Text, useColorModeValue } from '@chakra-ui/react';
import './CardCTA.css';
import { useTranslation } from 'react-i18next';

export const CardCTA = () => {
  const { t } = useTranslation();

  return (
    <div class="cardCTA">
      <div class="cardCTA-content">
        <Text
          className="cardCTA-title"
          color={useColorModeValue('black', 'white')}
        >
          {t('pricingCard.signUp')}
        </Text>
        <Text
          className="pricetext"
          align="center"
          py="1.7vh"
          fontSize={'7vh'}
          fontWeight="extrabold"
        >
          {t('pricingCard.joinNow')}
        </Text>

        <Text class="cardCTA-title">{t('pricingCard.enjoyBenefits')}</Text>
      </div>
      <i class="fa-solid fa-hat-witch cardCTA-icon"></i>
    </div>
  );
};
