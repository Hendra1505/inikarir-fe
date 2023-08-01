<?php 
error_reporting(E_ALL ^ (E_NOTICE | E_WARNING));
$server = "localhost";
$user = "u1797068_root";
$password = "jokopurwanto87";
$database = "u1797068_hitung_landing";
set_time_limit(1800);
$koneksi = mysqli_connect($server, $user, $password, $database);
 
//cek koneksi
if (mysqli_connect_errno()){
	echo "Koneksi database mysqli gagal!!! : " . mysqli_connect_error();
}
        session_start();
		//memasukkan data 
        $email  = $_POST['email'];
		//MEMBUAT simpan
		mysqli_query($koneksi, "INSERT INTO subscribe(email,dari) 
	                       VALUES('$email','sa_spc')");
	                       
	echo "<script>alert('Data Subscribe berhasil di tambahkan!');history.go(-1);</script>";
	  // header('location:./');
	 echo '</script>';  
     


?>