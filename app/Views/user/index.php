<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Request and Inquire</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/alertifyjs@1.13.1/build/css/alertify.min.css" />
    <link rel="stylesheet" href="<?=base_url('assets/css/style.css')?>">
</head>

<body class="master">

    <nav class="navbar navbar-expand-md bg-success">
        <div class="container">
            <a href="#" class="navbar-brand text-uppercase fw-bold text-white">Barangay Management System</a>
            <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#btn">
                <i class="fa-solid fa-bars"></i>
            </button>
            <div class="navbar-collapse collapse" id="btn">
                <ul class="navbar-nav ms-auto" id="loginFalse">
                    <li class="nav-item">
                        <a href="javascript:void(0)" onclick="homePage()"
                            class="nav-link text-white fw-bold text-uppercase">Home</a>
                    </li>
                    <li class="nav-item">
                        <a href="javascript:void(0)" onclick="registerPage()"
                            class="nav-link text-white fw-bold text-uppercase">Register</a>
                    </li>
                    <li class="nav-item">
                        <a href="javascript:void(0)" onclick="loginPage()"
                            class="nav-link text-white fw-bold text-uppercase">Login</a>
                    </li>
                </ul>
                <ul class="navbar-nav ms-auto" id="loginTrue" style="display: none;">
                    <li class="nav-item">
                        <a href="#" class="nav-link text-white fw-bold text-uppercase">Home</a>
                    </li>
                    <li class="nav-item">
                        <a href="javascript:void(0)" onclick="RequestedPage()" class="nav-link text-white fw-bold text-uppercase">Requested File
                         <span class="badge badge-pill bg-danger mt-0 " id="requested_bar"></span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link text-white fw-bold text-uppercase">Inquiry
                         <span class="badge badge-pill bg-danger mt-0 " id="notification_bars"></span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link text-white fw-bold text-uppercase">Logout</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <br><br>
    <div class="py-3">

        <div class="container">
            <div id="homePages">Home Page</div>
            <div id="registerPages" style="display: none;"></div>
            <div id="loginPages" style="display: none;"></div>
            <div id="logedPages" style="display: none;"></div>
             <!-- Modal for Barangay Clearance -->
             <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content" id="modalContent">
                    </div>
                </div>
            </div>
            <!--End Modal-->
            <div id="userRequestedTable" style="display: none;"></div>
        </div>
    </div>


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
    <script  src="//cdn.jsdelivr.net/npm/alertifyjs@1.13.1/build/alertify.min.js"></script>
    <script src="<?= base_url('assets/js/user/pageManipulation.js')?>"></script>
    <script src="<?= base_url('assets/js/user/function.js')?>"></script>
</body>

</html>