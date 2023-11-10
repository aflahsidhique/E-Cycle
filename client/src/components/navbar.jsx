import styles from "./styles.module.css";





const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<div className={styles.main_container}>
			<nav className={styles.Navbar}>
				<span className={styles.nav_logo}>E-Cycle</span>
				<div className={styles.nav_items}>
					<a href="/">Home</a>
					<a href="/about">About</a>
					<a href="/pickup">Request Pickup</a>
					<a href="/products">Products</a>
					<button className={styles.white_btn} onClick={handleLogout}>
						Logout
					</button>
				</div>
			</nav>
		</div>
	);
};

export default Main;
