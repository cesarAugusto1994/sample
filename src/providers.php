<?php
/**
 * Created by PhpStorm.
 * User: cesar
 * Date: 15/12/16
 * Time: 08:43
 */

$app->register(new \Silex\Provider\DoctrineServiceProvider(), [
    'db.options' => [
        'driver' => 'pdo_mysql',
        'host' => 'mysql',
        'dbname' => 'sample',
        'user' => 'root',
        'password' => '',
        'charset' => 'utf8mb4',
    ],
]);

$app->register(new \Dflydev\Provider\DoctrineOrm\DoctrineOrmServiceProvider(), [
    'orm.proxies_dir' => __DIR__ . '/../var/cache/doctrine',
    'orm.em.options' => [
        'mappings' => [
            array(
                'type' => 'annotation',
                'namespace' => 'Api\Entities',
                'path' => __DIR__ . '/../src/',
                'use_simple_annotation_reader' => false
            ),
        ],
    ],
]);