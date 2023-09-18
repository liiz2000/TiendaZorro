Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"Tienda del Zorro","publishDate":"18/09/2023 10:38:40","pages":[{"id":"ca0a5cd4-d39e-4105-949e-69c165be8c7c","name":"Tienda del Zorro","description":"<p style=\"text-align:left;text-indent:0pt;margin:12pt 0pt 12pt 0pt;\"><a name=\"_dx_frag_StartFragment\"></a><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">Proceso de negocios para una tienda de autoservicios</span><a name=\"_dx_frag_EndFragment\"></a><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">, desde que el cliente selecciona sus productos, los deposita en el carrito, hasta que paga sus productos por distintos tipos de pago</span></p><p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">&nbsp;</span></p>","version":"1.0","author":"mayliz","image":"files\\diagrams\\Tienda del Zorro.svg","isSubprocessPage":false,"isCallActivityPage":false,"properties":[],"elements":[{"id":"32b954f7-a55d-4a69-82b8-91d66682b33a","name":"Tienda del Zorro","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":16.0,"y":16.0}],"radius":0.0,"height":820.0,"width":50.0,"shape":"rect"},"elementType":"Participant","elementSubType":"Participant","properties":[],"pageElements":[{"id":"4ca022be-6f14-4c7e-a3ce-f8c0a9f8d41c","name":"Inicio Simple","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">Inicia el proceso una vez que el usuario entre a la tienda</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":106.0,"y":177.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart","elementSubType":"StartEvent"},{"id":"c0051e18-0fa9-4971-817e-c960b420d141","name":"Entrar a la tienda del zorro","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">El cliente ira acomprar los productos necesarios para su vida diaria </span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":187.0,"y":161.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"UserTask","elementSubType":"UserTask","properties":[]},{"id":"e8ed34f2-4e0d-4f1a-8249-97b785228e32","name":"Dirigirse al área de los producto","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">El cliente se dirige a la &aacute;rea del producto que necesita</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":328.0,"y":163.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"UserTask","elementSubType":"UserTask","properties":[]},{"id":"c8396f2b-50cd-4bee-ba5e-1627732c5b93","name":"Buscar producto","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><a name=\"_dx_frag_StartFragment\"></a><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">El cliente selecciona los productos que desea comprar y los coloca en su carrito de compras.</span><a name=\"_dx_frag_EndFragment\"></a><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\"> </span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":494.0,"y":165.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"UserTask","elementSubType":"UserTask","properties":[]},{"id":"5bc76e65-6d05-44fb-a036-dacf01644ef4","name":"Agregar al carrito","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">Todo el subproceso desde que el cliente busca su producto hasta que lo ingresa a su carrito</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\SubProcess.png","imageBounds":{"points":[{"x":644.0,"y":159.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"isPublished":true,"elementType":"SubProcess","elementSubType":"SubProcess","properties":[]},{"id":"5a570282-b6e8-47ae-819f-97b6a294c675","name":"Ir a caja","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">Al terminar la compra de los productos el usuario tendra que ir cajero pagar los productos</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":923.0,"y":165.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"UserTask","elementSubType":"UserTask","properties":[]},{"id":"bec199cc-2bc4-48b5-bef9-53f50bce0027","name":"Colocar los productos en el mostrador de la caja","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">Los productos se tendran que poner el mesa donde los registraran</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":1086.0,"y":165.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"UserTask","elementSubType":"UserTask","properties":[]},{"id":"d9a24cbc-e018-4c51-b878-5c9a9c331cf4","name":"Escanea el código de los productos","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><a name=\"_dx_frag_StartFragment\"></a><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">El cajero registra uno por uno de los productos</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\ManualTask.png","imageBounds":{"points":[{"x":1199.0,"y":516.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ManualTask","elementSubType":"ManualTask","properties":[]},{"id":"32831d48-777d-48c4-8fbb-310183034ff6","name":"Registra los datos del producto","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">Los datos de los productos que se compraron se van almacenando en una sola cuenta </span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\ServiceTask.png","imageBounds":{"points":[{"x":1277.0,"y":699.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ServiceTask","elementSubType":"ServiceTask","properties":[{"id":"ServiceTaskImplementation","name":"Implementación","value":"Servicio Web","type":"text"}]},{"id":"79c85864-b49b-4116-85f8-aa7aa940bcc6","name":"Muestra la cantidad total apagar ","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">Al terminar de registar los productos el precisio de los productos se van sumando hasta generar su cantidad total </span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\ServiceTask.png","imageBounds":{"points":[{"x":1420.0,"y":699.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ServiceTask","elementSubType":"ServiceTask","properties":[{"id":"ServiceTaskImplementation","name":"Implementación","value":"Servicio Web","type":"text"}]},{"id":"6cfc3384-5631-458f-a86d-dccf8fe0a12c","name":"Indica la cantidad total","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">El cajero al saber la cantidad se la hace saber al cliente cuanto tiene que pagar </span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\ManualTask.png","imageBounds":{"points":[{"x":1420.0,"y":507.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ManualTask","elementSubType":"ManualTask","properties":[]},{"id":"4a5f1472-c6a1-4c88-af35-4dcb309479c2","name":"Solicita el método de pago","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">El cajero le pide al cliente cual manera va hacer su manera de pago para su cuenta</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\ManualTask.png","imageBounds":{"points":[{"x":1573.0,"y":507.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ManualTask","elementSubType":"ManualTask","properties":[]},{"id":"abfef661-575f-4aaf-9024-a58305c9f8ad","name":"Cliente selecciona método de pago","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">El cliente podra escoger como sedesee pagar su cuenta </span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":1713.0,"y":162.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"UserTask","elementSubType":"UserTask","properties":[]},{"id":"eddaaeb9-4515-4709-9e52-6c1b6901fd1c","name":"Pago con vales","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">Si el cliente escogio el metodo de pago por vales tiene subproceso en la forma apagar </span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\SubProcess.png","imageBounds":{"points":[{"x":2085.0,"y":248.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"isPublished":true,"elementType":"SubProcess","elementSubType":"SubProcess","properties":[]},{"id":"6a03387a-18f0-4f83-b5aa-8dde93e37920","name":"Pago en tarjeta crédito o débito","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">Si el cliente escogio el metodo de pago por tarjeta cr&eacute;dito o d&eacute;bito tiene su subproceso de la manera a pagar</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\SubProcess.png","imageBounds":{"points":[{"x":1961.0,"y":248.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"isPublished":true,"elementType":"SubProcess","elementSubType":"SubProcess","properties":[]},{"id":"ab29e07d-9b66-43f0-90b8-bf1cb6c27d86","name":"Pago en efectivo","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">El cliente si desea pagar por metodo de pago en efectivo lleva un subproceso de todo los pasos de como es el pago</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\SubProcess.png","imageBounds":{"points":[{"x":1828.0,"y":248.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"isPublished":true,"elementType":"SubProcess","elementSubType":"SubProcess","properties":[]},{"id":"21a6b2ed-cce9-42c5-bd7f-a76ba2b1c184","name":"Generar ticket","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">Al terminar su pago que haiga escogido se le genera un ticket de todos los productos que compro </span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\ReceiveTask.png","imageBounds":{"points":[{"x":1986.0,"y":699.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ReceiveTask","elementSubType":"ReceiveTask","properties":[{"id":"ReceiveTaskImplementation","name":"Implementación","value":"Servicio Web","type":"text"}]},{"id":"f16e80b6-153b-42fa-bda5-228f373f5bbe","name":"Cajero recibe ticket ","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">El cajero recibe el ticket de la maquina donde se generan para poder entregarselo al cliente </span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\ManualTask.png","imageBounds":{"points":[{"x":2324.0,"y":499.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ManualTask","elementSubType":"ManualTask","properties":[]},{"id":"83ea46e1-6b8d-4ab4-a610-c32a43f14398","name":"Cajero hace entrega del ticket al cliente ","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">El cajero al tener el ticket se lo entrega al cliente </span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\ManualTask.png","imageBounds":{"points":[{"x":2464.0,"y":499.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ManualTask","elementSubType":"ManualTask","properties":[]},{"id":"5235972a-c9bd-4a0f-8e25-96ef6b16da9e","name":"Cliente recibe su ticket ","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">El cliente al recibir su ticket puede ver cuanto se gasto y el precio de los productos de cada uno</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\ManualTask.png","imageBounds":{"points":[{"x":2587.0,"y":248.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ManualTask","elementSubType":"ManualTask","properties":[]},{"id":"ca880dbb-1405-41f8-90ab-5331226e0884","name":"Finaliza su compra ","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">El cliente al recibir el ticket su compra ya esta terminada </span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":2727.0,"y":248.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"UserTask","elementSubType":"UserTask","properties":[]},{"id":"f9d74aa4-7d00-4938-a59b-20b2d800fc9c","name":"El cliente sale de la tienda ","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">El cliente puede salir de la tienda con todos sus productos que deseeo comprar</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\UserTask.png","imageBounds":{"points":[{"x":2867.0,"y":248.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"UserTask","elementSubType":"UserTask","properties":[]},{"id":"9043dae1-0b45-44b9-9056-e7c2e3957b97","name":"Fin Simple","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">Finaliza el proceso una vez que el cliente haiga tenido su ticket en sus manos de lo que compro </span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":3007.0,"y":263.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd","elementSubType":"EndEvent"}]}],"subPages":[{"id":"eddaaeb9-4515-4709-9e52-6c1b6901fd1c","name":"Pago con vales","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">Si el cliente escogio el metodo de pago por vales tiene subproceso en la forma apagar </span></p>","image":"files\\diagrams\\Pago con vales.svg","isSubprocessPage":true,"isCallActivityPage":false,"elements":[],"parentRef":"ca0a5cd4-d39e-4105-949e-69c165be8c7c"},{"id":"6a03387a-18f0-4f83-b5aa-8dde93e37920","name":"Pago en tarjeta crédito o débito","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">Si el cliente escogio el metodo de pago por tarjeta cr&eacute;dito o d&eacute;bito tiene su subproceso de la manera a pagar</span></p>","image":"files\\diagrams\\Pago en tarjeta credito o debito.svg","isSubprocessPage":true,"isCallActivityPage":false,"elements":[],"parentRef":"ca0a5cd4-d39e-4105-949e-69c165be8c7c"},{"id":"ab29e07d-9b66-43f0-90b8-bf1cb6c27d86","name":"Pago en efectivo","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">El cliente si desea pagar por metodo de pago en efectivo lleva un subproceso de todo los pasos de como es el pago</span></p>","image":"files\\diagrams\\Pago en efectivo.svg","isSubprocessPage":true,"isCallActivityPage":false,"elements":[],"parentRef":"ca0a5cd4-d39e-4105-949e-69c165be8c7c"},{"id":"5bc76e65-6d05-44fb-a036-dacf01644ef4","name":"Agregar al carrito","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:11pt;font-weight:normal;font-style:normal;\">Todo el subproceso desde que el cliente busca su producto hasta que lo ingresa a su carrito</span></p>","image":"files\\diagrams\\Agregar al carrito.svg","isSubprocessPage":true,"isCallActivityPage":false,"elements":[],"parentRef":"ca0a5cd4-d39e-4105-949e-69c165be8c7c"}]}],"texts":{"tableOfContents":"Tabla de Contenidos","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versión","author":"Autor","description":"Descripción","mainPool":"Proceso principal","mainPoolDescription":"Proceso principal Descripción","processDiagrams":"Diagramas de Proceso","processElements":"Elementos del proceso","elements":"Elementos del proceso","defaultElementName":"Elemento","performers":"Ejecutantes","accountable":"Responsable","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Home","search":"Buscar","goToParentProcess":"Ir al proceso padre","calledBy":"Llamado por","attachmentsTooltip":"Ver adjuntos","visitBizagi":"Visite bizagi.com","contains":"Contiene {0} Subprocesos","showAll":"Ver todo","fullScreen":"Pantalla completa","zoomIn":"Acercar","zoomOut":"Alejar","close":"Cerrar","menu":"Menu: ","errorPage":"Error al visualizar la página","process":"Proceso","subProcess":"Subprocesos publicados","contain":"Contiene","checkAttributes":"Ver atributos","checkOverview":"Ver resumen","unavailableResource":"El recurso no esta disponible","localResource":"El recurso puede accederse localmente","performer":"Ejecutante","linktoimage":"Hipervínculo a imagen","presentationAction":"Acciones de presentación","searchGlobal":"Buscar todo","searchLocal":"Buscar en este proceso","searchResults":"No se encontraron resultados","titlePage":"Inicio","emptyElement":"Este elemento aún no se ha documentado","unsupported":"Su navegador no soporta contenido mostrado en esta página. <br> Le recomendamos actualizar su navegador.","details":"Detalles","viewDetails":"Ver detalles","expand":"Expandir","mainPoolProperties":"Propiedades Proceso principal","cannotVisualize":"No es posible visualizar correctamente","resourceNotFound":"No se encontró el recurso solicitado:","applyTheme":"Aplicando el tema","showMore":"Ver mas","showLess":"Ver menos","hideDescription":"Ocultar descripción","showDescription":"Mostrar descripción","presentationActionLink":"Ver acción de presentación","goToLinkThrow":"Ir al evento de destino","goToLinkCatch":"Ir al evento de origen","goToSubProcess":"Ir al subproceso","viewByList":"Lista de procesos","viewByTree":"Jerarquía de procesos","diagramList":"Lista de procesos","folderTree":"Jerarquía de procesos"},"searchMap":[{"containerId":"ca0a5cd4-d39e-4105-949e-69c165be8c7c","containerName":"Tienda del Zorro","isSubprocess":false,"elements":[{"id":"32b954f7-a55d-4a69-82b8-91d66682b33a","value":"Tienda del Zorro"},{"id":"81d77db2-f33c-434b-84aa-5d0054083cb4","value":"Cliente"},{"id":"3e54cfb3-f284-4fa8-ae5d-cf813a678297","value":"Cajero"},{"id":"ac4c80cf-9f16-40e6-adef-372d23498461","value":"Sistema"},{"id":"4ca022be-6f14-4c7e-a3ce-f8c0a9f8d41c","value":""},{"id":"c8396f2b-50cd-4bee-ba5e-1627732c5b93","value":"Buscar producto"},{"id":"8f94421e-a7d7-4739-a759-fb23b302a79a","value":"¿Agregar más productos?"},{"id":"c0051e18-0fa9-4971-817e-c960b420d141","value":"Entrar a la tienda del zorro"},{"id":"e8ed34f2-4e0d-4f1a-8249-97b785228e32","value":"Dirigirse al área de los producto"},{"id":"5a570282-b6e8-47ae-819f-97b6a294c675","value":"Ir a caja"},{"id":"d9a24cbc-e018-4c51-b878-5c9a9c331cf4","value":"Escanea el código de los productos"},{"id":"bec199cc-2bc4-48b5-bef9-53f50bce0027","value":"Colocar los productos en el mostrador de la caja"},{"id":"32831d48-777d-48c4-8fbb-310183034ff6","value":"Registra los datos del producto"},{"id":"79c85864-b49b-4116-85f8-aa7aa940bcc6","value":"Muestra la cantidad total apagar "},{"id":"6cfc3384-5631-458f-a86d-dccf8fe0a12c","value":"Indica la cantidad total"},{"id":"4a5f1472-c6a1-4c88-af35-4dcb309479c2","value":"Solicita el método de pago"},{"id":"5bc76e65-6d05-44fb-a036-dacf01644ef4","value":"Agregar al carrito"},{"id":"12e01128-7872-4829-ae65-12bcacde1453","value":"¿Selecciona pago en efectivo?"},{"id":"ab29e07d-9b66-43f0-90b8-bf1cb6c27d86","value":"Pago en efectivo"},{"id":"d35507b6-2ce2-4584-a0d2-6cde2b5e6739","value":"¿Selecciona pago en tarjeta crédito o débito?"},{"id":"78be4c8c-2c58-42f7-9322-9348c9bf4db6","value":"¿Selecciona pago con vales?"},{"id":"6a03387a-18f0-4f83-b5aa-8dde93e37920","value":"Pago en tarjeta crédito o débito"},{"id":"eddaaeb9-4515-4709-9e52-6c1b6901fd1c","value":"Pago con vales"},{"id":"abfef661-575f-4aaf-9024-a58305c9f8ad","value":"Cliente selecciona método de pago"},{"id":"21a6b2ed-cce9-42c5-bd7f-a76ba2b1c184","value":"Generar ticket"},{"id":"9043dae1-0b45-44b9-9056-e7c2e3957b97","value":""},{"id":"f16e80b6-153b-42fa-bda5-228f373f5bbe","value":"Cajero recibe ticket "},{"id":"83ea46e1-6b8d-4ab4-a610-c32a43f14398","value":"Cajero hace entrega del ticket al cliente "},{"id":"5235972a-c9bd-4a0f-8e25-96ef6b16da9e","value":"Cliente recibe su ticket "},{"id":"ca880dbb-1405-41f8-90ab-5331226e0884","value":"Finaliza su compra "},{"id":"f9d74aa4-7d00-4938-a59b-20b2d800fc9c","value":"El cliente sale de la tienda "},{"id":"83c38246-1657-438a-be74-b088d56544fb"},{"id":"9788e9f6-8941-4eeb-9cfc-43ec2e5ae981"}]}]}