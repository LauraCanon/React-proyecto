import React from "react";

export default function RequestService() {
  return (
    <main class="mt-5 container ">
        <div class="row">
            <div class="col mt-5 py-3">
                <h3>Solicitando Servicio: Colaborador</h3>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4 d-flex justify-content-center mt-5 p-2 ">
                <div class="card border-0" style={{width: "20rem"}}>
                    <img src="/img/person.png" class="card-img-top" />
                    <div class="card-body">
                    <p class="card-text mt-5">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
        <div class="col-md-4 mt-5 p-2">
            <div class="form-group">
                <label for="fechaInicio" class="form-label" ></label>  
                <input type="text" id="fechaInicio" placeholder="Fecha del Servicio" class="form-control"/>
            </div>
            <div class="dropdown">
                <button class="btn dropdown-toggle border" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Hora
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#">9:00am - 12:00m</a>
                  <a class="dropdown-item" href="#">12pm - 3pm</a>
                  <a class="dropdown-item" href="#">3pm - 6pm</a>
                </div>
              </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label"></label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="8">Descripcion del servicio</textarea>
            </div>
            <div class="mb-5 mt-3">
                <label for="formFile" class="form-label">Adjuntar Imagen</label>
                <input class="form-control" type="file" id="formFile"/>
            </div>
            <div class="d-grid gap-2 col-8 mx-auto">
                <button class="btn btn-primary" type="button">Confirmar</button>
              </div>
        </div>
        <div class="col-md-4 ">
            <div class="mt-3 d-flex flex-row align-items-center p-3 form-color">Comentarios</div>
            <div class="mt-2">
                <div class="d-flex flex-row p-3"> <img src="https://randomuser.me/api/portraits/men/39.jpg" width="40" height="40" class="rounded-circle mr-3"/>
                    <div class="w-100 ms-4">
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="d-flex flex-row align-items-center"> <span class="mr-2">Brian selter </span> <small class="c-badge ms-5">Top Comment</small> </div> <small>12h ago</small>
                        </div>
                        <p class="text-justify comment-text mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                        <div class="d-flex flex-row user-feed"> <span class="wish"><i class="fa fa-heartbeat mr-2"></i>24</span> <span class="ml-3"><i class="fa fa-comments-o mr-2"></i>Reply</span> </div>
                    </div>
                </div>
                <div class="d-flex flex-row p-3"> <img src="https://randomuser.me/api/portraits/men/21.jpg" width="40" height="40" class="rounded-circle mr-3"/>
                    <div class="w-100 ms-4">
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="d-flex flex-row align-items-center"> <span class="mr-2">Seltos Majito</span> <small class="c-badge ms-5">Top Comment</small> </div> <small>2h ago</small>
                        </div>
                        <p class="text-justify comment-text mb-0">Tellus in hac habitasse platea dictumst vestibulum. Lectus nulla at volutpat diam ut venenatis tellus. Aliquam etiam erat velit scelerisque in dictum non consectetur. .</p>
                        <div class="d-flex flex-row user-feed"> <span class="wish"><i class="fa fa-heartbeat mr-2"></i>14</span> <span class="ml-3"><i class="fa fa-comments-o mr-2"></i>Reply</span> </div>
                    </div>
                </div>
                <div class="d-flex flex-row p-3"> <img src="https://randomuser.me/api/portraits/men/23.jpg" width="40" height="40" class="rounded-circle mr-3"/>
                    <div class="w-100 ms-4">
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="d-flex flex-row align-items-center"> <span class="mr-2">Maria Santola</span> <small class="c-badge ms-5">Top Comment</small> </div> <small>12h ago</small>
                        </div>
                        <p class="text-justify comment-text mb-0"> Id eu nisl nunc mi ipsum faucibus. Massa massa ultricies mi quis hendrerit dolor. Arcu bibendum at varius vel pharetra vel turpis nunc eget. </p>
                        <div class="d-flex flex-row user-feed"> <span class="wish"><i class="fa fa-heartbeat mr-2"></i>54</span> <span class="ml-3"><i class="fa fa-comments-o mr-2"></i>Reply</span> </div>
                    </div>
                </div>
        </div>
      </div>
    </div>
</main>
    
  );
}
