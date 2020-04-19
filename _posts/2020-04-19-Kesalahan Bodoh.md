---
layout: post
title: "Kesalahan Bodoh"
author: "Irfan Sofyana"
comments: "True" 
tags: random programming
---

# Kesalahan bodoh apa yang aku lakukan?

Oke singkatnya itu aku lagi mau ngerjain Tubes Machine Learning buat ngerjain implementasi algoritma *k-means*. *As you know*, buat ngerjain hal-hal yang berbau machine learning, pasti perlu pake yang namanya [*jupyter notebook*](https://jupyter.org/install). Aku baru inget ternyata ubuntu di laptopku itu masih belum ada *jupyter* yang keinstall. Jadinya aku coba buat nyari cara install *jupyter* di ubuntu. Buat yang belum tau, ubuntu di laptopku ini ubuntu 16.04. Kenapa masih pake yang 16 *nggak* yang 18 ? Alasannya adalah ubuntu 18 *nggak* compatible sama laptop yang aku punya.

*Browsing* lah aku gimana caranya ngeinstall *jupyter* di ubuntu 16. Oh ternyata gampang gan. Pertama harus punya `pip` atau `pip3` dulu baru nanti bisa ngeinstall *jupyter*. Karena aku udah punya `pip3` jadinya yaudah tinggal 

```bash
$ pip3 install jupyter
```

Nah tulisannya di ubuntu sih udah berhasil. Oke jadi sikat aja gan coba ngebuat file .ipynb terus coba di-run. Nah masalahnya muncul mulai dari sini. Fak, ternyata kernelnya *nggak* bisa ngerun filenya. Aku *nggak* tau salahnya ini dimana. Soalnya harusnya bisa-bisa aja. Oh iya, pas ngerjain tugas ini juga agak terburu-buru sih karena pengen cepet kelar. Jadi yaudah deh pake *windows* dulu buat ngerjain ini.

Sekitar 2 jam akhirnya aku selesai buat ngeimplementasiin [K-Means](https://id.wikipedia.org/wiki/K-means). Waktu itu aku masih belum kepo buat ngelanjutin kenapa ubuntuku masih *nggak* bisa jalanin *jupyter*. Aku memilih untuk nge-*chill* dulu.

Malem harinya aku kepo lagi kenapa tadi gagal buat jalanin *jupyter*-nya. Nah akhirnya browsing-browsing lagi dan nemu bahwa kayaknya `pip3` yang aku pakai itu udah terlalu jadul. Jadi yaudah upgrade dulu `pip3`nya. 

Pas udah di-upgrade tetep aja gan masih *nggak* bisa. Sampai saat ini aku belum menyerah. Aku masih coba nyari cara lain. Sampai akhirnya aku akhirnya coba *uninstall* jupyternya dulu. 
Nah setelah di *uninstall*, aku coba *install* lagi *jupyter notebook*nya. Dan WTF, **nggak bisa keinstall**.

Tulisannya sih versi *python* yang aku pakai itu terlalu jadul (3.5) sementara ada *library* yang perlu versi 3.6. Hmm.. curiga sih hal ini karena udah *upgrade* `pip3`nya. Jadi yaudah deh. Ngadepin masalah ini aku langsung browsing aja cara nge*upgrade* versi *python*. Sehabis nemu beberapa *source* yang bisa dipercaya, aku coba deh buat install. Dan aku berhasil sih nge*install* *python* 3.6 sama *python* 3.7. Nah tapi permasalahannya itu adalah kalau aku coba cek version 

```bash
$ python3 -V
```
hasilnya itu masih Python 3.5.2

Browsing lagi deh gimana cara ngubah default `python3` biar bisa jadi `python3.6`. Sehabis *browsing*-*browsing* sebentar nemu caranya. Waktu itu aku mikir kali ini pasti berhasil.

Oke setelah berhasil ngubah *version*, aku ngeinstall *jupyter*nya lagi dan masalahnya itu pas nyoba buat nge-*run* masih gagal. Duh dosa apa yang kubuat :(.

Eh ternyata masalahnya ga cuman sampe situ. Aku jadi *nggak* bisa buka terminal lewat *launcher*. `ctrl+alt+T` juga *nggak* bisa dipake buat buka terminal. FAK. ini masalah gede banget. Gimana caranya kita make ubuntu kalo terminalnya aja *nggak* bisa dibuka. Setelah coba-coba, aku sebenernya masih bisa jalanin terminal. Tapi caranya itu harus masuk ke suatu *directory* dulu baru klik kanan -> open terminal here. Nah tapi masa harus gitu terus WTF. Nyarilah berbagai solusi yang ada terus nemu [ini](https://medium.com/@aaditya.chhabra/not-able-to-launch-terminal-ubuntu-16-04-84de95ecdaa).

Oke jadi di artikel itu dia bilang kita mesti masuk ke terminal `ctrl + alt + F2`. Nah tapi malem itu aku NGIDE parah. Aku coba masuk ke terminal biasa (lewat open terminal here). Terus langsung aja masukin perintahnya satu-satu. 

Keanehan terjadi pas aku masukin perintah ini.

```bash
$ sudo apt-get purge python3.5
```

Kok lama banget ya. Berarti banyak banget yang di *uninstall* nih. Nah pas kelar nge *uninstall*, WTF!!! Terminal *launcher* nya ilang, beberapa aplikasi kaya *slack*, *spotify* juga pada ilang WTF, WTF, WTF pasti ga beres ini. Karena mengalami hal yang tidak beres, aku langsung aja *restart* laptopnya. 

Dan pas berhasil masuk lagi, tampilan desktopku jadi gini
![][error]

[error]:/assets/post/error-terminal.jpg

Laptopku *nggak* bisa diapa-apain. Help guys :(. Yang aku bisa lakuin cuman ngeklik-klik doang. Tapi yang bisa diklik itu cuman file manager. Ini bener-bener masalah serius coy. Waktu itu aku bener-bener emosi kenapa bisa sampe kayak gini. Bingung juga harus ngapain. Aku juga coba cara klasik, *restart* laptop berkali-kali, tapi hasilnya juga nihil. Aku coba untuk nenangin diri dulu untuk beberapa saat. Waktu itu aku udah mikir ini pasti perlu *install* ulang. Duh mager banget, repot gan. Mana semesteran juga belum selesai.

Aku nyoba untuk selesain masalah ini dengan *browsing*. Setelah beberapa saat yang cukup lama, aku nemu ini [system file removed after sudo apt-get remove python](https://superuser.com/questions/557231/system-file-removed-after-sudo-apt-get-remove-python). Kayaknya ini bakal ngebantu. Yaudah aku liat aja komennya dan coba ngejalanin perintahnya. Nah kali ini aku coba ngejalaninnya di terminal yang perlu `ctrl + alt + F2`. Ini foto pas coba ngeinstall-nya
![][recovery]

[recovery]:/assets/post/recovery-ubuntu-desktop.jpg

Pas udah kelar nge*install*, aku coba untuk restart laptopnya dan Alhamdulilah gan, laptopnya bisa balik lagi. Terminalnya ada lagi sekarang dan bisa pake perintah `ctrl + alt + T`. Launchernya juga balik lagi. Nah tapi beberapa aplikasi itu ke-*uninstall*. Kaya *postman*, *spotify*, *xampp*, *slack* dan masih banyak lain aku juga udah lupa. Tapi bersyukur deh masih bisa balik lagi tanpa perlu *uninstall*. Kalau masalah data-data sih aman-aman aja cuman beberapa aplikasinya aja. Malem itu pun aku habiskan dengan nge-*install* aplikasi-aplikasi yang ilang, khususnya yang berkaitan sama kuliah dan kerja. Sungguh pengalaman konyol dan bodoh yang *nggak* bakal aku lupakan.

## Lesson learned:
- Kalau nge*browsing* sesuatu jangan cuman dari 1 sumber doang. Karena bisa celaka gan.
- Kalau kalian pengguna ubuntu, kalian harus perhatiin dulu perintah yang bakal kalian masukin ke terminal. **Hati-hati** dengan perintah yang masuk sebagai root (`sudo`) dan juga yang berhubungan dengan remove (`rm`, `purge`, dll)
- Tetap tenang dalam menghadapi masalah. Jangan terburu-buru memutuskan. Coba pikirin lebih matang lagi.
- Dan terakhir, mikir dulu dalam bertindak, hahaha :) 

## Bonus

Beberapa link yang aku pikir cukup bermanfaat.
- [Upgrade python to 3.6 and 3.7 in Ubuntu](https://medium.com/@rajputankit22/upgrade-python-2-7-to-3-6-and-3-7-in-ubuntu-97d2727bf911)
- [How to install Jupyter notebook on Ubuntu 16.04](https://www.rosehosting.com/blog/how-to-install-jupyter-on-an-ubuntu-16-04-vps/)
- [Change default Python3 default version ubuntu](https://unix.stackexchange.com/questions/410579/change-the-python3-default-version-in-ubuntu)
- [System file removed after sudo apt-get remove python](https://superuser.com/questions/557231/system-file-removed-after-sudo-apt-get-remove-python)

**Notes:** Gunakan dengan bijak :) dan tetap hati-hati. 