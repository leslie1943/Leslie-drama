/* eslint-disable */
const array_imgs = ['d3.jpg', 'd4.jpg', 'd6.jpg', 'd7.jpg', 'd8.jpg', 'dd2.jpg', 'dd3.jpg', 'dd4.jpg', 'etj1.jpg', 'etj2.jpg', 'etj3.jpg', 'etj4.jpg', 'jysp1.jpg', 'jysp2.jpg', 'jysp3.jpg', 'jysp4.jpg', 'lcjr_1.jpg', 'lcjr_2.jpg', 'lcjr_3.jpg', 'shanghaitan1.jpg', 'shanghaitan2.jpg', 'shanghaitan3.jpg', 'shanghaitan4.jpg', 'yehuoguan_1.jpg', 'yehuoguan_2.jpg', 'yehuoguan_3.jpg', 'yehuoguan_4.jpg', 'yehuoguan_5.jpg', 'zlp1.jpg', 'zlp2.jpg', 'zlp3.jpg', 'zlp4.jpg']

// 狼人之血
for (let i = 1; i < 24; i++) {
  array_imgs.push('langrenzhixue_' + i + '.jpg');
}
// 反光
for (let i = 1; i < 27; i++) {
  array_imgs.push('fanguang_' + i + '.jpg');
}

// 南越王陵
for (let i = 1; i < 17; i++) {
  array_imgs.push('nanyuewangling_' + i + '.jpg');
}

const photos = []

// () => import('@/pages/drama/roles')
for (let i = 0; i < array_imgs.length; i++) {
  photos.push(require('./imgs/' + array_imgs[i]))
}

export default photos
