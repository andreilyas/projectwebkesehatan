<!--JAVASCRIPT-->
        <script type="text/javascript">
            function check(){
            nama = document.getElementById('nama').value;
            identitas = document.getElementById('identitas').value;
            notelp = document.getElementById('notelp').value;
            usia = document.getElementById('usia').value;
            tinggi = document.getElementById('tinggi').value;
            berat = document.getElementById('berat').value;
            kelamin = document.getElementById('kelamin').value;
            tmptlahir = document.getElementById('tmptlahir').value;
            tgllahir = document.getElementById('tgllahir').value;
            agama = document.getElementById('agama').value;
            alamat = document.getElementById('alamat').value;
            posisi = document.getElementById('posisi').value;
            punggung = document.getElementById('punggung').value;

            if(nama==''||nama==null){
                document.getElementById('id_nama').innerHTML="*Wajib Diisi";
                return false;
            }
            if(identitas==''||identitas==null){
                document.getElementById('id_identitas').innerHTML="*Wajib Diisi";
                return false;
            }
            if(notelp==''||notelp==null){
                document.getElementById('id_notelp').innerHTML="*Wajib Diisi";
                return false;
            }
            if(usia==''||usia==null){
                document.getElementById('id_usia').innerHTML="*Wajib Diisi";
                return false;
            }
            if(tinggi==''||tinggi==null){
                document.getElementById('id_tinggi').innerHTML="*Wajib Diisi";
                return false;
            }
            if(berat==''||berat==null){
                document.getElementById('id_berat').innerHTML="*Wajib Diisi";
                return false;
            }
            if(kelamin==''||kelamin=='-'||kelamin==null){
                document.getElementById('id_kelamin').innerHTML="*Wajib Diisi";
                return false;
            }
            if(tmptlahir==''||tmptlahir==null){
                document.getElementById('id_tmptlahir').innerHTML="*Wajib Diisi";
                return false;
            }
            if(tgllahir==''||tgllahir==null){
                document.getElementById('id_tgllahir').innerHTML="*Wajib Diisi";
                return false;
            }
            if(agama==''||agama=='-'||agama==null){
                document.getElementById('id_agama').innerHTML="*Wajib Diisi";
                return false;
            }
            if(alamat==''||alamat==null){
                document.getElementById('id_alamat').innerHTML="*Wajib Diisi";
                return false;
            }
            if(posisi==''||posisi==null){
                document.getElementById('id_posisi').innerHTML="*Wajib Diisi";
                return false;
            }
            if(punggung==''||punggung==null){
                document.getElementById('id_punggung').innerHTML="*Wajib Diisi";
                return false;
            }

            if(nama != '' &&
            identitas != '' &&
            notelp != '' &&
            usia != '' &&
            tinggi != '' &&
            berat != '' &&
            kelamin != '' &&
            tmptlahir != '' &&
            tgllahir != '' &&
            agama != '' &&
            alamat != '' &&
            posisi != '' &&
            punggung != ''){
                var outputContent = "<strong>Nama Lengkap:</strong> "+nama+
                "<br><strong>No. Identitas:</strong> "+identitas+
                "<br><strong>No. Telphone:</strong> "+notelp+
                "<br><strong>Usia:</strong> "+usia+" tahun"+
                "<br><strong>Tinggi Badan:</strong> "+tinggi+" cm"+
                "<br><strong>Berat Badan:</strong> "+berat+" Kg"+
                "<br><strong>Jenis Kelamin:</strong> "+kelamin+
                "<br><strong>Tempat Lahir:</strong> "+tmptlahir+
                "<br><strong>Tanggal Lahir:</strong> "+tgllahir+
                "<br><strong>Agama:</strong> "+agama+
                "<br><strong>Alamat Rumah:</strong> "+alamat+

                document.getElementById('output').innerHTML = outputContent;

                showPopup();
                return false;

            }
        }

        function showPopup() {
            var popup = document.getElementById('popup');
            popup.style.display = 'block';

            var outputContent = document.getElementById('output').innerHTML;
            document.getElementById('OutputData').innerHTML = outputContent;
        }

        
                
        </script>