class TestCase{
    setup(){
        console.log("Open browser");
    }
    teardown(){

        console.log("Stop browser");
    }
}
class APITest extends TestCase{
    setup(){
        console.log("UPdated:Open browser");
        super.setup();
    }
    teardown(){
        console.log("Updated: Stop browser");
        super.teardown();
    }
}
let  test = new APITest();
test.setup();
test.teardown();

class BasePage {
    verify() {
        console.log("Verifying base page");
    }
}

class LoginPage extends BasePage {
    verify() {
        console.log("Verify: username field exists");
        console.log("Verify: password field exists");
        console.log("Verify: login button is visible");
    }
}

class DashboardPage extends BasePage {
    verify() {
        console.log("Verify: welcome message shown");
        console.log("Verify: sidebar menu loaded");
    }
}

class CartPage extends BasePage {
    verify() {
        console.log("Verify: cart items displayed");
        console.log("Verify: total price is correct");
    }
}

let pages = [new LoginPage(), new DashboardPage(), new CartPage()];

pages.forEach(function (page) {
    page.verify();
    console.log("---");
});