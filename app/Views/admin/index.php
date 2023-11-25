<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Panel</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/alertifyjs@1.13.1/build/css/alertify.min.css"/>
</head>
<style>
    .grid{
    display: grid;
    justify-content: center;
    grid-template-columns: 350px 350px 350px;
    padding: 30px;
    gap: 50px;
    margin: 10px;
}

@media screen and (max-width:800px) {
    .grid{
        margin: auto;
        content: "";
        clear: both;
        display: table;
    }
    .card-grid{
        margin-top: 10px;
    }
    
     
}
</style>
<body>
<div class="container-fluid">
    <div class="row flex-nowrap">
        <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-success">
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100 ">
                <a href="#" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span class="fs-5 d-none d-sm-inline">Menu</span>
                </a>
                <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start " id="menu">
                    <li class="m-3">
                    <a href="javascript:void(0)" data-bs-toggle="collapse" class="nav-a px-0 align-middle text-white text-decoration-none" onclick="HomePages()">
                            <i class="fs-4 bi-speedometer2"></i> <span class="ms-1 d-none d-sm-inline fs-5">Dashboard</span>
                        </a>
                        
                    </li>
                    <li class="m-3">
                        <a href="javascript:void(0)" class="nav-a px-0 align-middle text-white text-decoration-none" onclick="RequestPages()">
                            <i class="fs-4 bi-people"></i> <span class="ms-1 d-none d-sm-inline fs-5">Citizen Request</span>
                        </a>
                    </li>

                    <li class="m-3">
                        <a href="javascript:void(0)" class="nav-a px-0 align-middle text-white text-decoration-none">
                            <i class="fs-4 bi-gear"></i> <span class="ms-1 d-none d-sm-inline fs-5">Citizen Inquire</span>
                        </a>
                    </li>
                    <li class="m-3">
                        <a href="javascript:void(0)" class="nav-a px-0 align-middle text-white text-decoration-none">
                            <i class="fs-4 bi-gear"></i> <span class="ms-1 d-none d-sm-inline fs-5">Citizen Complain</span>
                        </a>
                    </li>
                    <li class="m-3">
                        <a href="javascript:void(0)" onclick="addRequestDocument()" class="nav-a px-0 align-middle text-white text-decoration-none">
                            <i class="fs-4 bi-gear"></i> <span class="ms-1 d-none d-sm-inline fs-5">Add Document</span>
                        </a>
                    </li>
                    <li class="m-3">
                        <a href="javascript:void(0)" class="nav-a px-0 align-middle text-white text-decoration-none">
                            <i class="fs-4 bi-gear"></i> <span class="ms-1 d-none d-sm-inline fs-5">Barangay Official</span>
                        </a>
                    </li>
                    <li class="m-3">
                        <a href="#" class="nav-a px-0 align-middle text-white text-decoration-none">
                            <i class="fs-4 bi-power"></i> <span class="ms-1 d-none d-sm-inline fs-5">Logout</span>
                       </a>
                    </li>
                </ul>
                
            </div>
        </div>
        <div class="col p-0 m-0">
            <div class='p-2 d-flex justify-content-center shadow'>
                <h4 class='fw-bold fs-3 mt-2'>Barangay System</h4> 
            </div>
            <div class="container">
                <div id="homePage"></div>
                <div id="requestPage" style="display: none;"></div>
                <div id="addRequestingPage" style="display: none;"></div>
                 <!-- Modal for View Detail -->
             <div class="modal fade" id="modal1" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content" id="modalView">
                    </div>
                </div>
            </div>
            <!--End Modal-->

             <!-- Modal for View sending pdf -->
             <div class="modal fade" id="modal2" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content" id="modalSendingPDF">
                    </div>
                </div>
            </div>
            <!--End Modal-->
              
            </div>
        </div>
    </div>
</div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
    <script  src="//cdn.jsdelivr.net/npm/alertifyjs@1.13.1/build/alertify.min.js"></script>
    <script src="<?= base_url('/assets/js/admin/pagesManipulation.js')?>"></script>
    <script src="<?= base_url('/assets/js/admin/function.js')?>"></script>
</body>
</html>