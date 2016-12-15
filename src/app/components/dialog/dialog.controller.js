export class DialogController {
  constructor ($scope, $mdDialog, locals) {
    'ngInject';

    if(angular.isUndefined(locals.key)){
      locals.key = 'seed';
    }

    const steps = {
      seed: {
        title: 'Etapa Semilla',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at porttitor ex, vel elementum elit. Maecenas enim nisl, placerat non massa vitae, suscipit euismod ligula. Cras malesuada libero quis mauris hendrerit, sed feugiat metus pulvinar. Vivamus volutpat, ante vitae luctus tempor, risus massa tincidunt tortor, ut tristique nulla massa ut enim. Morbi tristique ex sit amet turpis accumsan maximus. Cras tellus felis, dictum vel nisi quis, porttitor convallis mi. Praesent sed est quis turpis convallis tincidunt. Donec a neque sed ante luctus rutrum. Pellentesque luctus sodales venenatis. Phasellus at lacus et orci tempus varius. Duis luctus tempor ligula, hendrerit ullamcorper orci tempor sit amet. Curabitur eget tincidunt dui. Nunc at elit turpis. Praesent sodales tellus non turpis gravida suscipit. Curabitur feugiat viverra mauris et feugiat. Quisque bibendum porttitor euismod.'
      },
      version0: {
        title: 'Versión 0',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at porttitor ex, vel elementum elit. Maecenas enim nisl, placerat non massa vitae, suscipit euismod ligula. Cras malesuada libero quis mauris hendrerit, sed feugiat metus pulvinar. Vivamus volutpat, ante vitae luctus tempor, risus massa tincidunt tortor, ut tristique nulla massa ut enim. Morbi tristique ex sit amet turpis accumsan maximus. Cras tellus felis, dictum vel nisi quis, porttitor convallis mi. Praesent sed est quis turpis convallis tincidunt. Donec a neque sed ante luctus rutrum. Pellentesque luctus sodales venenatis. Phasellus at lacus et orci tempus varius. Duis luctus tempor ligula, hendrerit ullamcorper orci tempor sit amet. Curabitur eget tincidunt dui. Nunc at elit turpis. Praesent sodales tellus non turpis gravida suscipit. Curabitur feugiat viverra mauris et feugiat. Quisque bibendum porttitor euismod.'
      },
      version1: {
        title: 'Versión 1',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at porttitor ex, vel elementum elit. Maecenas enim nisl, placerat non massa vitae, suscipit euismod ligula. Cras malesuada libero quis mauris hendrerit, sed feugiat metus pulvinar. Vivamus volutpat, ante vitae luctus tempor, risus massa tincidunt tortor, ut tristique nulla massa ut enim. Morbi tristique ex sit amet turpis accumsan maximus. Cras tellus felis, dictum vel nisi quis, porttitor convallis mi. Praesent sed est quis turpis convallis tincidunt. Donec a neque sed ante luctus rutrum. Pellentesque luctus sodales venenatis. Phasellus at lacus et orci tempus varius. Duis luctus tempor ligula, hendrerit ullamcorper orci tempor sit amet. Curabitur eget tincidunt dui. Nunc at elit turpis. Praesent sodales tellus non turpis gravida suscipit. Curabitur feugiat viverra mauris et feugiat. Quisque bibendum porttitor euismod.'
      },
      version2: {
        title: 'Versión 2',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at porttitor ex, vel elementum elit. Maecenas enim nisl, placerat non massa vitae, suscipit euismod ligula. Cras malesuada libero quis mauris hendrerit, sed feugiat metus pulvinar. Vivamus volutpat, ante vitae luctus tempor, risus massa tincidunt tortor, ut tristique nulla massa ut enim. Morbi tristique ex sit amet turpis accumsan maximus. Cras tellus felis, dictum vel nisi quis, porttitor convallis mi. Praesent sed est quis turpis convallis tincidunt. Donec a neque sed ante luctus rutrum. Pellentesque luctus sodales venenatis. Phasellus at lacus et orci tempus varius. Duis luctus tempor ligula, hendrerit ullamcorper orci tempor sit amet. Curabitur eget tincidunt dui. Nunc at elit turpis. Praesent sodales tellus non turpis gravida suscipit. Curabitur feugiat viverra mauris et feugiat. Quisque bibendum porttitor euismod.'
      },
      finding: {
        title: 'Descubrimiento y Medición',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at porttitor ex, vel elementum elit. Maecenas enim nisl, placerat non massa vitae, suscipit euismod ligula. Cras malesuada libero quis mauris hendrerit, sed feugiat metus pulvinar. Vivamus volutpat, ante vitae luctus tempor, risus massa tincidunt tortor, ut tristique nulla massa ut enim. Morbi tristique ex sit amet turpis accumsan maximus. Cras tellus felis, dictum vel nisi quis, porttitor convallis mi. Praesent sed est quis turpis convallis tincidunt. Donec a neque sed ante luctus rutrum. Pellentesque luctus sodales venenatis. Phasellus at lacus et orci tempus varius. Duis luctus tempor ligula, hendrerit ullamcorper orci tempor sit amet. Curabitur eget tincidunt dui. Nunc at elit turpis. Praesent sodales tellus non turpis gravida suscipit. Curabitur feugiat viverra mauris et feugiat. Quisque bibendum porttitor euismod.'
      },
      planning: {
        title: 'Planeación y Análisis',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at porttitor ex, vel elementum elit. Maecenas enim nisl, placerat non massa vitae, suscipit euismod ligula. Cras malesuada libero quis mauris hendrerit, sed feugiat metus pulvinar. Vivamus volutpat, ante vitae luctus tempor, risus massa tincidunt tortor, ut tristique nulla massa ut enim. Morbi tristique ex sit amet turpis accumsan maximus. Cras tellus felis, dictum vel nisi quis, porttitor convallis mi. Praesent sed est quis turpis convallis tincidunt. Donec a neque sed ante luctus rutrum. Pellentesque luctus sodales venenatis. Phasellus at lacus et orci tempus varius. Duis luctus tempor ligula, hendrerit ullamcorper orci tempor sit amet. Curabitur eget tincidunt dui. Nunc at elit turpis. Praesent sodales tellus non turpis gravida suscipit. Curabitur feugiat viverra mauris et feugiat. Quisque bibendum porttitor euismod.'
      },
      design: {
        title: 'Diseño',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at porttitor ex, vel elementum elit. Maecenas enim nisl, placerat non massa vitae, suscipit euismod ligula. Cras malesuada libero quis mauris hendrerit, sed feugiat metus pulvinar. Vivamus volutpat, ante vitae luctus tempor, risus massa tincidunt tortor, ut tristique nulla massa ut enim. Morbi tristique ex sit amet turpis accumsan maximus. Cras tellus felis, dictum vel nisi quis, porttitor convallis mi. Praesent sed est quis turpis convallis tincidunt. Donec a neque sed ante luctus rutrum. Pellentesque luctus sodales venenatis. Phasellus at lacus et orci tempus varius. Duis luctus tempor ligula, hendrerit ullamcorper orci tempor sit amet. Curabitur eget tincidunt dui. Nunc at elit turpis. Praesent sodales tellus non turpis gravida suscipit. Curabitur feugiat viverra mauris et feugiat. Quisque bibendum porttitor euismod.'
      },
      implementacion: {
        title: 'Implementación',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at porttitor ex, vel elementum elit. Maecenas enim nisl, placerat non massa vitae, suscipit euismod ligula. Cras malesuada libero quis mauris hendrerit, sed feugiat metus pulvinar. Vivamus volutpat, ante vitae luctus tempor, risus massa tincidunt tortor, ut tristique nulla massa ut enim. Morbi tristique ex sit amet turpis accumsan maximus. Cras tellus felis, dictum vel nisi quis, porttitor convallis mi. Praesent sed est quis turpis convallis tincidunt. Donec a neque sed ante luctus rutrum. Pellentesque luctus sodales venenatis. Phasellus at lacus et orci tempus varius. Duis luctus tempor ligula, hendrerit ullamcorper orci tempor sit amet. Curabitur eget tincidunt dui. Nunc at elit turpis. Praesent sodales tellus non turpis gravida suscipit. Curabitur feugiat viverra mauris et feugiat. Quisque bibendum porttitor euismod.'
      }
    };

    this.content = steps[locals.key];

  }
}

