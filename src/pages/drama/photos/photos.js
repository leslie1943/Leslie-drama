/* eslint-disable */
const array_imgs = ['d3.jpg', 'd4.jpg', 'd6.jpg', 'd7.jpg', 'd8.jpg', 'dd2.jpg', 'dd3.jpg', 'dd4.jpg', 'etj1.jpg', 'etj2.jpg', 'etj3.jpg', 'etj4.jpg', 'jysp1.jpg', 'jysp2.jpg', 'jysp3.jpg', 'jysp4.jpg', 'langrenzhixue_1.jpg', 'langrenzhixue_2.jpg', 'langrenzhixue_3.jpg', 'langrenzhixue_4.jpg', 'langrenzhixue_5.jpg', 'langrenzhixue_6.jpg', 'langrenzhixue_7.jpg', 'langrenzhixue_8.jpg', 'langrenzhixue_9.jpg', 'langrenzhixue_10.jpg', 'langrenzhixue_11.jpg', 'langrenzhixue_12.jpg', 'langrenzhixue_13.jpg', 'langrenzhixue_14.jpg', 'langrenzhixue_15.jpg', 'langrenzhixue_16.jpg', 'langrenzhixue_17.jpg', 'langrenzhixue_18.jpg', 'langrenzhixue_19.jpg', 'langrenzhixue_20.jpg', 'langrenzhixue_21.jpg', 'langrenzhixue_22.jpg', 'langrenzhixue_23.jpg', 'lcjr_1.jpg', 'lcjr_2.jpg', 'lcjr_3.jpg', 'shanghaitan1.jpg', 'shanghaitan2.jpg', 'shanghaitan3.jpg', 'shanghaitan4.jpg', 'yehuoguan_1.jpg', 'yehuoguan_2.jpg', 'yehuoguan_3.jpg', 'yehuoguan_4.jpg', 'yehuoguan_5.jpg', 'zlp1.jpg', 'zlp2.jpg', 'zlp3.jpg', 'zlp4.jpg']

const photos = []

// () => import('@/pages/drama/roles')
for (let i = 0; i < array_imgs.length; i++) {
  photos.push(require('./imgs/' + array_imgs[i]))
}

export default photos
