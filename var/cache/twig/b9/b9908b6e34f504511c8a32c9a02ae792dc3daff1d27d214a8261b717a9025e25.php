<?php

/* @WebProfiler/Collector/exception.html.twig */
class __TwigTemplate_422b42e6f433c8c0fc914f3b5abdcf4583d5f8235bd7c095a094ce7de5f4fe30 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("@WebProfiler/Profiler/layout.html.twig", "@WebProfiler/Collector/exception.html.twig", 1);
        $this->blocks = array(
            'head' => array($this, 'block_head'),
            'menu' => array($this, 'block_menu'),
            'panel' => array($this, 'block_panel'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "@WebProfiler/Profiler/layout.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $__internal_96ba93e66029f234440647ecce636c7a59f0147780793d1542cf12d2f8685b91 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_96ba93e66029f234440647ecce636c7a59f0147780793d1542cf12d2f8685b91->enter($__internal_96ba93e66029f234440647ecce636c7a59f0147780793d1542cf12d2f8685b91_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "@WebProfiler/Collector/exception.html.twig"));

        $__internal_10b652dd68b01e56e5c5f1c984fd71fc6197c349866d2cd5da90d5457d898a08 = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_10b652dd68b01e56e5c5f1c984fd71fc6197c349866d2cd5da90d5457d898a08->enter($__internal_10b652dd68b01e56e5c5f1c984fd71fc6197c349866d2cd5da90d5457d898a08_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "@WebProfiler/Collector/exception.html.twig"));

        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_96ba93e66029f234440647ecce636c7a59f0147780793d1542cf12d2f8685b91->leave($__internal_96ba93e66029f234440647ecce636c7a59f0147780793d1542cf12d2f8685b91_prof);

        
        $__internal_10b652dd68b01e56e5c5f1c984fd71fc6197c349866d2cd5da90d5457d898a08->leave($__internal_10b652dd68b01e56e5c5f1c984fd71fc6197c349866d2cd5da90d5457d898a08_prof);

    }

    // line 3
    public function block_head($context, array $blocks = array())
    {
        $__internal_a720b3cce586793411b55cd7ec2dc976428e76cb032478cf71ee4d0a3803af13 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_a720b3cce586793411b55cd7ec2dc976428e76cb032478cf71ee4d0a3803af13->enter($__internal_a720b3cce586793411b55cd7ec2dc976428e76cb032478cf71ee4d0a3803af13_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "head"));

        $__internal_0996b1c992fb6b30d77af1613f9dca6e45ca37d8f263d4b23328899983058758 = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_0996b1c992fb6b30d77af1613f9dca6e45ca37d8f263d4b23328899983058758->enter($__internal_0996b1c992fb6b30d77af1613f9dca6e45ca37d8f263d4b23328899983058758_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "head"));

        // line 4
        echo "    ";
        if ($this->getAttribute(($context["collector"] ?? $this->getContext($context, "collector")), "hasexception", array())) {
            // line 5
            echo "        <style>
            ";
            // line 6
            echo $this->env->getRuntime('Symfony\Bridge\Twig\Extension\HttpKernelRuntime')->renderFragment($this->env->getExtension('Symfony\Bridge\Twig\Extension\RoutingExtension')->getPath("_profiler_exception_css", array("token" => ($context["token"] ?? $this->getContext($context, "token")))));
            echo "
        </style>
    ";
        }
        // line 9
        echo "    ";
        $this->displayParentBlock("head", $context, $blocks);
        echo "
";
        
        $__internal_0996b1c992fb6b30d77af1613f9dca6e45ca37d8f263d4b23328899983058758->leave($__internal_0996b1c992fb6b30d77af1613f9dca6e45ca37d8f263d4b23328899983058758_prof);

        
        $__internal_a720b3cce586793411b55cd7ec2dc976428e76cb032478cf71ee4d0a3803af13->leave($__internal_a720b3cce586793411b55cd7ec2dc976428e76cb032478cf71ee4d0a3803af13_prof);

    }

    // line 12
    public function block_menu($context, array $blocks = array())
    {
        $__internal_b04ca2175e0fe713fcef00c21263017341465f07574129e71d6361df574b1a95 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_b04ca2175e0fe713fcef00c21263017341465f07574129e71d6361df574b1a95->enter($__internal_b04ca2175e0fe713fcef00c21263017341465f07574129e71d6361df574b1a95_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "menu"));

        $__internal_53e5d6ea9a0bd264d522ee6ccbd263b7ebfd10bd81f4067f167046bc8fe8bb78 = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_53e5d6ea9a0bd264d522ee6ccbd263b7ebfd10bd81f4067f167046bc8fe8bb78->enter($__internal_53e5d6ea9a0bd264d522ee6ccbd263b7ebfd10bd81f4067f167046bc8fe8bb78_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "menu"));

        // line 13
        echo "    <span class=\"label ";
        echo (($this->getAttribute(($context["collector"] ?? $this->getContext($context, "collector")), "hasexception", array())) ? ("label-status-error") : ("disabled"));
        echo "\">
        <span class=\"icon\">";
        // line 14
        echo twig_include($this->env, $context, "@WebProfiler/Icon/exception.svg");
        echo "</span>
        <strong>Exception</strong>
        ";
        // line 16
        if ($this->getAttribute(($context["collector"] ?? $this->getContext($context, "collector")), "hasexception", array())) {
            // line 17
            echo "            <span class=\"count\">
                <span>1</span>
            </span>
        ";
        }
        // line 21
        echo "    </span>
";
        
        $__internal_53e5d6ea9a0bd264d522ee6ccbd263b7ebfd10bd81f4067f167046bc8fe8bb78->leave($__internal_53e5d6ea9a0bd264d522ee6ccbd263b7ebfd10bd81f4067f167046bc8fe8bb78_prof);

        
        $__internal_b04ca2175e0fe713fcef00c21263017341465f07574129e71d6361df574b1a95->leave($__internal_b04ca2175e0fe713fcef00c21263017341465f07574129e71d6361df574b1a95_prof);

    }

    // line 24
    public function block_panel($context, array $blocks = array())
    {
        $__internal_4cd7b52d3b96ac00755f235f1df66018a45aeacbbe1e0408917f8fe6b8256d84 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_4cd7b52d3b96ac00755f235f1df66018a45aeacbbe1e0408917f8fe6b8256d84->enter($__internal_4cd7b52d3b96ac00755f235f1df66018a45aeacbbe1e0408917f8fe6b8256d84_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "panel"));

        $__internal_5028bc159c6eb3f087a2a514f44623dc11d65f0483e39ece0356a1cdc50ec4b2 = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_5028bc159c6eb3f087a2a514f44623dc11d65f0483e39ece0356a1cdc50ec4b2->enter($__internal_5028bc159c6eb3f087a2a514f44623dc11d65f0483e39ece0356a1cdc50ec4b2_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "panel"));

        // line 25
        echo "    <h2>Exceptions</h2>

    ";
        // line 27
        if ( !$this->getAttribute(($context["collector"] ?? $this->getContext($context, "collector")), "hasexception", array())) {
            // line 28
            echo "        <div class=\"empty\">
            <p>No exception was thrown and caught during the request.</p>
        </div>
    ";
        } else {
            // line 32
            echo "        <div class=\"sf-reset\">
            ";
            // line 33
            echo $this->env->getRuntime('Symfony\Bridge\Twig\Extension\HttpKernelRuntime')->renderFragment($this->env->getExtension('Symfony\Bridge\Twig\Extension\RoutingExtension')->getPath("_profiler_exception", array("token" => ($context["token"] ?? $this->getContext($context, "token")))));
            echo "
        </div>
    ";
        }
        
        $__internal_5028bc159c6eb3f087a2a514f44623dc11d65f0483e39ece0356a1cdc50ec4b2->leave($__internal_5028bc159c6eb3f087a2a514f44623dc11d65f0483e39ece0356a1cdc50ec4b2_prof);

        
        $__internal_4cd7b52d3b96ac00755f235f1df66018a45aeacbbe1e0408917f8fe6b8256d84->leave($__internal_4cd7b52d3b96ac00755f235f1df66018a45aeacbbe1e0408917f8fe6b8256d84_prof);

    }

    public function getTemplateName()
    {
        return "@WebProfiler/Collector/exception.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  138 => 33,  135 => 32,  129 => 28,  127 => 27,  123 => 25,  114 => 24,  103 => 21,  97 => 17,  95 => 16,  90 => 14,  85 => 13,  76 => 12,  63 => 9,  57 => 6,  54 => 5,  51 => 4,  42 => 3,  11 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("{% extends '@WebProfiler/Profiler/layout.html.twig' %}

{% block head %}
    {% if collector.hasexception %}
        <style>
            {{ render(path('_profiler_exception_css', { token: token })) }}
        </style>
    {% endif %}
    {{ parent() }}
{% endblock %}

{% block menu %}
    <span class=\"label {{ collector.hasexception ? 'label-status-error' : 'disabled' }}\">
        <span class=\"icon\">{{ include('@WebProfiler/Icon/exception.svg') }}</span>
        <strong>Exception</strong>
        {% if collector.hasexception %}
            <span class=\"count\">
                <span>1</span>
            </span>
        {% endif %}
    </span>
{% endblock %}

{% block panel %}
    <h2>Exceptions</h2>

    {% if not collector.hasexception %}
        <div class=\"empty\">
            <p>No exception was thrown and caught during the request.</p>
        </div>
    {% else %}
        <div class=\"sf-reset\">
            {{ render(path('_profiler_exception', { token: token })) }}
        </div>
    {% endif %}
{% endblock %}
", "@WebProfiler/Collector/exception.html.twig", "/var/www/html/vendor/symfony/web-profiler-bundle/Resources/views/Collector/exception.html.twig");
    }
}
