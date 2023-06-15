import React from 'react';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

export default function AccordionGokcin() {
  return (
    <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
      <em>
        Klinik Psikolog; Prep, Attentioner Uygulayıcısı, Türkiye Disleksi Hareketi Bursa Gönüllüsü.
      </em>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>Eğitim</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          Bursa Erkek Lisesi mezunudur. Psikoloji lisans eğitimini Uludağ Üniversitesi’nde 2006
          yılında bölüm birincisi ve fakülte ikincisi olarak tamamlanmıştır. 2010 yılında Klinik
          Psikoloji Yüksek Lisansını Uludağ Üniversitesi Tıp Fakültesi- Psikiyatri Anabilim Dalı’nda
          <blockquote>
            “Üniversite Öğrencilerinin Gelecek beklentilerine Etki Eden Faktörler, Bu Faktörlerin
            Birbirleriyle İlişkileri ve Bireylerin Depresyon ve Kaygı Düzeylerine Etkisi”
          </blockquote>{' '}
          konulu tezi ile tamamlamıştır. (Tez Danışmanı: Prof. Dr. Selçuk KIRLI).
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          {' '}
          <AccordionItemButton>İş Deneyimi</AccordionItemButton>{' '}
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            2006-2007 Özel Emine Örnek Koleji - okul psikoloğu, 6-7-8. Sınıflarla sınav kaygısı,
            ders başarısı, motivasyon, akran etkileşimi, ebeveyn ve çocuk iletişimi konularla
            çalışmıştır. Aile, öğretmen ve öğrencilere seminerler vermiştir.
            <ul>
              <li>
                2007-2010 Uludağ Üniversitesi Hastanesi Ruh Sağlığı ve Hastalıkları A.B.D’ nda
                araştırma görevlisi olarak çalışmıştır.
              </li>
              <li>
                2007-2009 döneminde Türk Psikologlar Derneği Bursa Şubesi Saymanlığını yapmıştır.
              </li>
              <li>
                2010-2015 Uludağ Üniversitesi Hastanesi Ruh Sağlığı Ve Hastalıkları Klinik ve
                Polikliniği’nde hastaların psikometrik değerlendirmelerini yapmış, adli vakaları
                değerlendirmiş, ayrıca klinikte grup terapisi uygulamaları yapmıştır. Nöroloji
                A.B.D.’nda hastaların nöropsikolojik değerlendirmelerini yapmıştır. Çocuk Ruh
                Sağlığı ve Hastalıkları ve Çocuk Hematoloji Onkoloji A.B.D. ‘nda çocukların
                gelişimlerini değerlendirmiş, zeka testleri yapmış, kronik hastalık süreci, aile
                bilgilendirmesi, kayıp ve yas konularında çalışmıştır.{' '}
              </li>
              <li>2018-……. Özel Rozet Aile Danışma Merkezi</li>
            </ul>
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          {' '}
          <AccordionItemButton>Mesleki Eğitimler / Sertifikalar</AccordionItemButton>{' '}
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            <ul>
              <li>
                Wechsler Çocuklar için Zeka Ölçeği (WÇZÖ-IV) Eğitimi; Öğr. Gör. Dr. Psk. Banu
                Elmastaş Dikeç, Psk. Dr. Nagehan Demiral{' '}
              </li>
              <li>
                Aile ve Evlilik Terapisi I. ve II. Seviye Kuramsal ve Uygulamalı Eğitimi; Prof. Dr.
                Hürol Fışıloğlu{' '}
              </li>
              <li>Transaksiyonel Analiz Eğitimi; Doç Dr. Azmi Varan</li>
              <li>T.A.T (Tematik Algı Testi) Eğitimi; Doç. Dr. Azmi Varan</li>
              <li>Konuşma Bozuklukları Eğitimi; Türk Psikologlar Derneği </li>
              <li>Türkçe Prep Uygulayıcı Eğitimi; Akademi Disleksi </li>
              <li>
                Attentioner Dikkat Eğitimi; Çocuk ve Ergen Psikiyatristi Dr.Hülya Bingöl Çağlayan,
                Apamer
              </li>
              <li>SAS Smart Beyin Eğitim Programı; Steven Michaelis </li>
              <li>Bilişsel Davranışçı Terapi Eğitimi; Prof. Dr. Murad Atmaca, Pegder</li>
              <li>Sosyal Beceri Eğitimi; Sobece </li>
              <li>
                Oyun Terapisi Eğitimi; Uzman Psikolog Sibel Cesur Akyunak, Ankara Psikiyatri ve
                Psikoterapi Akademi
                <li>
                  Çocuk ve Ergen Danışmanlığında Yaratıcı Tekniklerin Kullanımı; Klinik Psikolog
                  Selçuk Tokaç, Pegder
                </li>
              </li>
            </ul>
          </p>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
}
