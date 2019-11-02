export interface LocaleType {
  about: string;
  findPlace: string;
  download: string;
  support: string;
  whatIs: string;
  slogan: string;
  bannerInfo: string;
  moreInfo: string;
}

const ru: LocaleType = {
  about: 'о приложении',
  findPlace: 'искать рыбное место',
  download: 'скачать',
  support: 'поддержка',
  whatIs: 'что такое',
  slogan: 'Hook - подскажем где рыба!',
  bannerInfo:
    'Приложение «Hook» помогает быстро находить удачные места для рыбной ловли и отмечать свои',
  moreInfo: 'Подробно',
};
const en: LocaleType = {
  about: 'about app',
  findPlace: 'find fish place',
  download: 'download',
  support: 'support',
  whatIs: 'what is',
  slogan: 'Hook knows where the fish!',
  bannerInfo:
    'Приложение «Hook» помогает быстро находить удачные места для рыбной ловли и отмечать свои',
  moreInfo: 'More Info',
};

export default { ru, en };
